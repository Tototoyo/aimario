# ⚡ Quick Fix Reference Card

## 🔴 API Key Error FIX

**Error:** "An API Key must be set when running in a browser"

**Fix in 3 steps:**

1. **Edit `.env.local`** - Make sure it looks like this:
   ```env
   VITE_GEMINI_API_KEY=AIzaSy...your_real_key
   VITE_SUPABASE_URL=https://yourproject.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbG...your_real_key
   VITE_APP_URL=http://localhost:5173
   ```

2. **Restart server** (MUST DO THIS!):
   ```bash
   # Stop: Press Ctrl+C
   # Start: npm run dev
   ```

3. **Hard refresh browser:** Ctrl+Shift+R

**Key Points:**
- ✅ ALL variables MUST start with `VITE_`
- ✅ NO quotes around values
- ✅ REPLACE placeholders with real keys
- ✅ RESTART server after changes

---

## Common Mistakes

❌ **Wrong:**
```env
GEMINI_API_KEY=your_key          # Missing VITE_
VITE_GEMINI_API_KEY="your_key"   # Has quotes
VITE_GEMINI_API_KEY= your_key    # Space after =
```

✅ **Correct:**
```env
VITE_GEMINI_API_KEY=AIzaSyABC123...
```

---

## Quick Checklist

- [ ] `.env.local` file exists in project root
- [ ] All variables start with `VITE_`
- [ ] No quotes around values
- [ ] Real API keys (not placeholders)
- [ ] Server restarted after changes
- [ ] Browser refreshed (Ctrl+Shift+R)

---

## Get Your API Keys

**Gemini API Key:**
1. Go to: https://ai.google.dev/
2. Click "Get API key"
3. Copy key (starts with `AIza...`)

**Supabase Credentials:**
1. Go to: https://supabase.com
2. Project Settings > API
3. Copy URL and anon public key

---

## Still Not Working?

1. Check browser console (F12)
2. Look for error messages
3. See **TROUBLESHOOTING.md** for detailed help
4. See **API-KEY-FIX.md** for step-by-step guide

---

**Remember:** Always restart the server after editing `.env.local`!
