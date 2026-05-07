# Production Deployment Checklist for DreamTeam Consulting Website

## Overview
This is a production-ready Next.js application for DreamTeam Consulting. It includes Supabase for data storage and Resend for email notifications.

## Environment Setup

### 1. Required Environment Variables
Copy `.env.example` to `.env.local` and fill in all required values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `RESEND_API_KEY` - Your Resend API key for email sending
- `CONTACT_EMAIL_TO` - Email address to receive contact form submissions
- `NEXT_PUBLIC_SITE_URL` - Your production domain

Optional variables (with defaults provided):
- `NEXT_PUBLIC_COMPANY_EMAIL` - Company contact email
- `NEXT_PUBLIC_COMPANY_PHONE` - Company phone number
- `NEXT_PUBLIC_LINKEDIN_URL` - LinkedIn profile link
- `NEXT_PUBLIC_TWITTER_URL` - Twitter profile link
- `NEXT_PUBLIC_FACEBOOK_URL` - Facebook page link
- `NEXT_PUBLIC_INSTAGRAM_URL` - Instagram profile link

### 2. Get Your API Keys

#### Supabase
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings → API
4. Copy your Project URL and Anon Key

#### Resend
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Create an API key
4. **Important**: Update the `from` email in `app/api/contact/route.ts` to a verified Resend domain

## Database Setup

The contact form uses Supabase to store submissions. The database table was automatically created with:
- `id` - UUID primary key
- `name` - Submitter's name
- `email` - Submitter's email
- `message` - Contact message
- `created_at` - Timestamp
- `updated_at` - Timestamp

Row Level Security (RLS) policies are configured to:
- Allow anonymous users to submit forms
- Allow authenticated users to read submissions

## Security Features Implemented

### Contact Form Security
1. **Rate Limiting** - Maximum 3 requests per minute per IP address
2. **Input Validation** - All fields validated for length and format
3. **Input Sanitization** - XSS protection via text truncation
4. **Email Verification** - Regex validation of email addresses
5. **CSRF Protection** - Standard Next.js CSRF tokens

### Environment Variables
- All sensitive keys are kept in `.env.local` (never commit to git)
- Public variables use `NEXT_PUBLIC_` prefix
- `.gitignore` is configured to exclude `.env.local`

### Database Security
- Row Level Security (RLS) enabled on `contact_submissions` table
- Policies prevent unauthorized access
- Indexes created for query performance

### HTTP Headers
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security (on HTTPS)

## Accessibility Features

1. **Semantic HTML** - Proper use of `<header>`, `<main>`, `<section>`, `<footer>`
2. **ARIA Labels** - Form inputs have proper `aria-label` and `aria-invalid` attributes
3. **Keyboard Navigation** - All interactive elements are keyboard accessible
4. **Color Contrast** - Meets WCAG AA standards
5. **Focus States** - Visible focus indicators on all interactive elements
6. **Error Messages** - Associated with form fields via `aria-describedby`
7. **Mobile Menu** - Proper `aria-expanded` state management

## SEO Optimizations

1. **Metadata** - Complete Open Graph and Twitter Card tags
2. **Sitemap** - `public/sitemap.xml` for search engines
3. **Robots.txt** - `public/robots.txt` for crawlers
4. **Canonical URLs** - Prevents duplicate content issues
5. **Performance** - Optimized images and lazy loading
6. **Mobile Responsive** - Mobile-first design approach

## Before Deploying

### Critical Tasks
- [ ] Update all environment variables in deployment platform
- [ ] Test email sending with Resend (check spam folder)
- [ ] Verify contact form submissions appear in Supabase
- [ ] Test rate limiting (try submitting 4+ times rapidly)
- [ ] Check responsive design on mobile devices

### Important Updates
- [ ] Replace placeholder social media URLs with real links
- [ ] Update company contact information
- [ ] Add real company description and statistics
- [ ] Create or generate hero section image
- [ ] Add company logo (update in Header component)
- [ ] Verify domain in Resend email settings

### SEO & Analytics
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your domain
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Verify sitemap submission
- [ ] Test meta tags with social media preview tools

## Deployment on Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - Project Settings → Environment Variables
   - Add all variables from `.env.example`
4. Deploy: `git push` automatically triggers deployment

## Testing in Production

```bash
# Local testing
npm run build
npm run start

# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from curl"
  }'
```

## Monitoring & Maintenance

### Regular Checks
- Monitor contact form submissions in Supabase
- Check email delivery logs in Resend
- Monitor error logs in Vercel
- Review performance metrics

### Updates
- Keep Next.js updated: `npm update next`
- Update dependencies: `npm audit fix`
- Review Supabase security advisories
- Monitor Resend API changes

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Resend Docs**: https://resend.com/docs

## Troubleshooting

### Emails not sending
- Check RESEND_API_KEY is correct
- Verify `from` email is verified in Resend
- Check spam/junk folders
- Review Resend email logs

### Contact form submissions not appearing
- Verify SUPABASE_URL and ANON_KEY
- Check RLS policies in Supabase
- Review API route logs in Vercel

### Images not loading
- Check image URLs are correct
- Verify CORS settings if using external images
- Use relative paths for public folder images

## Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Rotate API keys** periodically
3. **Monitor Supabase** for unusual activity
4. **Use HTTPS only** in production
5. **Keep dependencies updated** for security patches
6. **Review error logs** regularly

## Performance Tips

- Images are lazy-loaded in Contact section
- Font Awesome icons loaded from CDN
- Google Fonts cached by browser
- Tailwind CSS is production-optimized
- Next.js handles automatic code splitting

## License & Credits

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Email**: Resend
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter & Outfit from Google Fonts

---

**Last Updated**: May 5, 2026
**Status**: Production Ready
