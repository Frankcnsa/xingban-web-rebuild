import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

export async function POST(request: Request) {
  try {
    const { message, history, sessionId } = await request.json();

    // Generate reply using Agnes API
    const agnesResponse = await fetch(process.env.AGNES_API_URL || 'https://api.agnes.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AGNES_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'agnes-2.0-flash',
        messages: [
          {
            role: 'system',
            content: `You are Clara, a warm and friendly AI companion for elderly users (50+).
Your personality: patient, kind, clear, and encouraging.
Your roles:
1. Help identify potential scams and provide safety tips
2. Offer gentle health reminders and wellness advice
3. Provide friendly conversation and companionship
4. Help with daily tasks and questions

IMPORTANT RULES:
- NEVER provide medical advice or diagnosis. Always recommend consulting healthcare professionals.
- Use simple, clear language. Avoid jargon.
- Be patient and understanding.
- When in doubt, ask clarifying questions.
- Keep responses concise but helpful.`,
          },
          ...(history || []).map((m: any) => ({ role: m.role, content: m.content })),
          { role: 'user', content: message },
        ],
        max_tokens: 800,
      }),
    });

    const agnesData = await agnesResponse.json();
    const reply = agnesData.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";

    // Save conversation to Supabase
    const { error: saveError } = await supabase
      .from('conversations')
      .insert({
        session_id: sessionId || `session_${Date.now()}`,
        role: 'user',
        content: message,
      });

    if (!saveError) {
      await supabase.from('conversations').insert({
        session_id: sessionId || `session_${Date.now()}`,
        role: 'assistant',
        content: reply,
      });
    }

    return NextResponse.json({ reply, sessionId: sessionId || `session_${Date.now()}` });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "I'm having trouble connecting right now. Please try again later." },
      { status: 500 }
    );
  }
}
