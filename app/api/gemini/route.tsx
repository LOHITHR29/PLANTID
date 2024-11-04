import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Hardcoded API key for testing
const API_KEY = 'AIzaSyCrg_39mFDVkfdd2FokETm0IAOHE_QLtdU';

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();

    if (!image) {
      throw new Error('No image data provided.');
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Identify this plant and provide its name and other important information. Return the response as a JSON object with the following structure:
    {
      "name": "Plant Name",
      "scientificName": "Scientific Name",
      "description": "A brief description of the plant",
      "details": {
        "Family": "...",
        "Native Region": "...",
        "Growth Habit": "...",
        "Flower Color": "...",
        "Leaf Type": "...",
        "Light Requirements": "...",
        "Water Needs": "...",
        "Soil Type": "..."
      }
    }`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: image.split(',')[1], // Extract the base64 data part of the image
        },
      },
    ]);

    const text = await result.response.text();

    try {
      // Try to extract JSON from the text response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : null;
      
      if (jsonString) {
        const jsonResponse = JSON.parse(jsonString);
        return NextResponse.json(jsonResponse);
      } else {
        throw new Error('No valid JSON found in the response');
      }
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      return NextResponse.json({
        name: 'Parsing Error',
        description: 'Unable to parse the plant information. Raw response: ' + text,
      });
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { name: 'Error', description: `Unable to identify plant: ${error.message}` },
      { status: 500 }
    );
  }
}
