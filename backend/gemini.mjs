import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";

  import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TOKEN;
  
  const genAI = new GoogleGenerativeAI(token);
  
  export default async function searching(msg) {

    const generationConfig = {
         "temperature": 1
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ];
  
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro-latest",
      generationConfig,
      safetySettings,
    });
  
    const searching = {};
    try {
      const data = await model.generateContent(msg);
      const text = data.response;
      const struct = text
        .text()
        .replace("```json", "")
        .replace("```", "")
        .replace("JSON", "")
        .trim();
        console.log(struct);
      return JSON.parse(struct);
    } catch (e) {
        console.log('erro gemini', e);
        return {};
    }
  }
  