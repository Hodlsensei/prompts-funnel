import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';
import { buildSystemPrompt } from '@/lib/faq-context';
import type { ChatCompletionMessageParam } from 'groq-sdk/resources/chat/completions';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

type IncomingMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const chatMessages: ChatCompletionMessageParam[] = [
      { role: 'system', content: buildSystemPrompt() },
      ...(messages as IncomingMessage[]).map((m) => ({
        role: m.role,
        content: m.content,
      })),
    ];

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 500,
      messages: chatMessages,
    });

    const reply = completion.choices[0]?.message?.content ?? '';

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Try again in a moment.' },
      { status: 500 }
    );
  }
}