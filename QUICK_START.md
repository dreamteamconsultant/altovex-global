# Quick Start Guide - DreamTeam Consulting Website

## 5-Minute Setup

### 1. Set Environment Variables

Create `.env.local` in project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL_TO=your_email@company.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Where to get keys:**
- **Supabase**: supabase.com → Create project → Settings → API
- **Resend**: resend.com → Create account → Get API key
- **Vercel**: vercel.com → Import GitHub repo

### 2. Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### 3. Deploy to Vercel

```bash
git push
# Vercel auto-deploys from GitHub
# Add env vars in Vercel dashboard
```

### 4. Test Contact Form

1. Fill out form at http://localhost:3000#contact
2. Check Supabase database (should have entry)
3. Check email inbox (should receive submission)

## Key Files to Update

### Update Company Info (Contact.tsx)
```typescript
// Line 13-15: Update phone and email
const contactInfo = [
  { details: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+234...' }
  { details: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@...' }
]

// Line 60-68: Update social media links
```

### Update Services (Services.tsx)
Replace the services array with your actual services (around line 2)

### Update Portfolio (Portfolio.tsx)
Replace the projects array with your actual projects (around line 2)

### Update Testimonials (Testimonials.tsx)
Replace the testimonials array with real customer quotes (around line 2)

### Update Hero (Hero.tsx)
Update the heading text (around line 9-11)

## Common Issues & Solutions

### Email Not Sending
- [ ] Check RESEND_API_KEY is correct
- [ ] Verify `from` email is verified in Resend
- [ ] Check spam folder
- [ ] Review Resend logs

### Form Data Not Showing in Database
- [ ] Check SUPABASE_URL and ANON_KEY are correct
- [ ] Verify table exists in Supabase
- [ ] Check RLS policies allow inserts
- [ ] Review Supabase logs

### Deployment Failed
- [ ] Check all env vars are added in Vercel
- [ ] Verify GitHub repo is connected
- [ ] Check build logs in Vercel dashboard
- [ ] Run `npm run build` locally to test

### Contact Form Not Working Locally
- [ ] Check `.env.local` file exists
- [ ] Verify all required env vars are set
- [ ] Run `npm run dev` (not `npm start`)
- [ ] Check browser console for errors

## File Structure

```
DreamTeam-Consulting/
├── app/
│   ├── api/contact/route.ts      ← Contact form API
│   ├── layout.tsx                ← SEO metadata
│   ├── page.tsx                  ← Home page
│   └── globals.css               ← Global styles
├── components/
│   ├── Header.tsx                ← Navigation
│   ├── Hero.tsx                  ← Landing section
│   ├── About.tsx                 ← Company info
│   ├── Services.tsx              ← Service offerings
│   ├── Portfolio.tsx             ← Project showcase
│   ├── Testimonials.tsx          ← Client testimonials
│   ├── Contact.tsx               ← Contact section
│   └── ContactForm.tsx           ← Form component
├── public/
│   ├── sitemap.xml               ← SEO sitemap
│   └── robots.txt                ← Crawler config
├── .env.example                  ← Environment template
├── PRODUCTION_CHECKLIST.md       ← Full setup guide
├── DELIVERABLES.md               ← What you got
└── QUICK_START.md                ← This file
```

## Customization Examples

### Change Hero Heading
File: `components/Hero.tsx` (line 9)
```typescript
<h1 className="...">
  Your New Heading <span className="text-orange-500">Here</span>
</h1>
```

### Add a New Service
File: `components/Services.tsx` (line 2)
```typescript
const services = [
  // ... existing services ...
  {
    icon: 'fa-your-icon',
    title: 'New Service',
    description: 'Service description here'
  }
]
```

### Change Colors
File: `app/globals.css`
Search for orange-500 and replace with your color

### Update Social Links
File: `components/Contact.tsx` (line 60)
```typescript
{ icon: 'fa-linkedin', href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#' }
```

## Deployment Steps

1. **Create GitHub Repo**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Add environment variables
   - Click Deploy

3. **Test in Production**
   - Fill contact form
   - Check email delivery
   - Verify database entry

## Monitoring

### Check Submissions
1. Go to Supabase dashboard
2. Select `contact_submissions` table
3. View all submissions

### Check Email Logs
1. Go to Resend dashboard
2. View email activity
3. Check delivery status

### Monitor Site
1. Go to Vercel dashboard
2. View analytics
3. Check error logs

## Security Reminders

- Never commit `.env.local` to GitHub
- Keep API keys secret
- Use environment variables for all secrets
- Update Resend sender email to verified domain
- Enable RLS policies in Supabase
- Monitor Supabase for suspicious activity

## Performance Tips

- Images are lazy-loaded
- CSS is minified
- JavaScript is optimized
- Fonts are cached
- Next.js handles code splitting

## Next Steps

After deployment:
1. [ ] Update social media links
2. [ ] Add company logo
3. [ ] Update portfolio projects
4. [ ] Change hero section image
5. [ ] Update testimonials
6. [ ] Monitor submissions
7. [ ] Set up analytics
8. [ ] Create backup

## Getting More Help

- **Setup Issues**: See `PRODUCTION_CHECKLIST.md`
- **Full Documentation**: See `DELIVERABLES.md`
- **Technical Details**: See `IMPLEMENTATION_SUMMARY.md`
- **Next.js Help**: nextjs.org/docs
- **Supabase Help**: supabase.com/docs
- **Resend Help**: resend.com/docs

## Estimated Timeline

- Setup env vars: 5 minutes
- Deploy to Vercel: 5 minutes
- Test contact form: 5 minutes
- Update content: 30 minutes
- Total: ~45 minutes to production!

---

**You're ready to launch!** 🚀

Start with Step 1 above and you'll be live in minutes.
