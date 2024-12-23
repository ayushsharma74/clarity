export const dynamic = 'force-dynamic'

import {
    GoogleGenerativeAI,
  } from "@google/generative-ai"
  import { NextResponse } from "next/server";
  
  const apiKey = process.env.GEMINI_API_KEY!;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

export async function POST(req: Request, res: Response) {
  try {
    const { prompt } = await req.json(); 

    const chatSession = model.startChat({
        generationConfig,
        history: [
        ]
    });
    const result = await chatSession.sendMessage(prompt);
    
    const text = result.response.text();

    console.log('Prompt:', prompt);

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error fetching Gemini API', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}