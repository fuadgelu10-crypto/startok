
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const geminiService = {
  async generateAdCopy(productDescription: string) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 3 catchy TokStar (short-form video) ad scripts and headlines for this product: ${productDescription}. Make them punchy and trend-aware.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING },
              script: { type: Type.STRING },
              hookType: { type: Type.STRING }
            }
          }
        }
      }
    });
    return JSON.parse(response.text);
  },

  async getCreatorInsights(engagementData: string) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this creator data: ${engagementData}. Provide 3 actionable tips to increase monetization revenue.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });
    return JSON.parse(response.text);
  }
};
