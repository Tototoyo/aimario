import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generatePrompt(systemPrompt: string, userPrompt: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 4000
    });

    return response.choices[0]?.message?.content || '';
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    throw new Error(error.message || 'Failed to generate prompt');
  }
}

export async function generateImage(prompt: string): Promise<string> {
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard'
    });

    return response.data[0]?.url || '';
  } catch (error: any) {
    console.error('DALL-E API Error:', error);
    throw new Error(error.message || 'Failed to generate image');
  }
}
