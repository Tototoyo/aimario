# 🤖 CineGen AI - Now Using ChatGPT (OpenAI)

## ✅ Changed from Gemini to OpenAI

The app now uses:
- **ChatGPT (GPT-4 Turbo)** for prompt generation
- **DALL-E 3** for image generation

## 🔑 Get Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)

## ⚙️ Setup

Update your `.env.local`:

```env
VITE_OPENAI_API_KEY=sk-your_actual_key_here
VITE_SUPABASE_URL=https://yourproject.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_URL=http://localhost:5173
```

## 💰 Pricing

**ChatGPT (GPT-4 Turbo):**
- $0.01 per 1K input tokens
- $0.03 per 1K output tokens
- Average prompt: ~$0.02-0.05

**DALL-E 3:**
- $0.040 per 1024×1024 image (standard)
- $0.080 per 1024×1024 image (HD)

**Estimated monthly cost:** $10-30 for moderate usage

## 🚀 Deploy

```bash
npm install
npm run dev
```

Environment variables for Vercel/Netlify:
```
VITE_OPENAI_API_KEY=sk-...
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
VITE_APP_URL=https://your-app.vercel.app
```

## ✨ Features

- GPT-4 Turbo for high-quality prompts
- DALL-E 3 for stunning images
- Same 5 generators
- Better quality outputs
- More reliable

## 🔒 Security

The API key is used client-side with `dangerouslyAllowBrowser: true`. 

**For production**, consider:
- Setting usage limits in OpenAI dashboard
- Monitoring API usage
- Implementing rate limiting
- Using a backend proxy (optional)

## 📝 What Changed

1. ❌ Removed: `@google/generative-ai`
2. ✅ Added: `openai` package
3. ✅ New service: `src/services/openai.ts`
4. ✅ Updated: App.tsx to use OpenAI
5. ✅ Updated: Environment variables

Everything else stays the same!
