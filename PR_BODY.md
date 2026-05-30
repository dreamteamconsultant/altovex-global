Title: Rebrand site from DreamTeam to Altovex

Summary
-------
This branch rebrands the site from "DreamTeam" to "Altovex", improves hero and header visuals, speeds up select animations for clearer motion, and adds a fixed socials component.

What's included
----------------
- Replace DreamTeam copy/assets with Altovex (headings, alt text, testimonials, docs).
- Increase hero and About heading sizes for stronger hierarchy.
- Speed up marquee and word-cycle animations for clearer motion.
- Improve header logo visibility and spacing.
- Add `Socials` component (fixed squircle icons) and render in layout.
- Update contact email defaults and contact API sender to Altovex addresses.

Files changed (high level)
-------------------------
- app/globals.css
- app/layout.tsx
- app/api/contact/route.ts
- components/Header.tsx
- components/Hero.tsx
- components/About.tsx
- components/AboutSection.tsx
- components/DreamTeamLuxurySection.tsx (renamed/updated to Altovex branding)
- components/Socials.tsx (new)
- components/Testimonials.tsx
- components/Contact.tsx
- components/FAQSection.tsx
- docs: DELIVERABLES.md, QUICK_START.md, IMPLEMENTATION_SUMMARY.md, PRODUCTION_CHECKLIST.md
- next-env.d.ts

Full file list is available in the branch history.

Manual checks / Testing steps
----------------------------
1. Pull the branch locally and run:

```bash
npm install
npm run dev
```

2. Verify in browser (http://localhost:3000):
- Header shows `Altovex` branding and larger logo.
- Hero heading is larger and readable on mobile & desktop.
- Moving words (marquee/word-cycle) move faster and are clearly readable.
- Social squircle icons appear fixed at the top-right and link to configured social URLs.
- Contact form sends to the updated default `altovexgl@gmail.com` when `NEXT_PUBLIC_COMPANY_EMAIL` is not set.

Environment variables / assets to set before deployment
------------------------------------------------------
- `NEXT_PUBLIC_YOUTUBE_URL`
- `NEXT_PUBLIC_TIKTOK_URL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_FACEBOOK_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `CONTACT_EMAIL_TO` (e.g., `altovexgl@gmail.com`)
- Add `/public/altovex-logo.jpg` (or update `BrandLogo` to point to preferred image)

Notes for maintainers
---------------------
- I have not pushed any remote PR. If you want me to open the PR, I can push `feat/altovex-branding` and create a PR in the org repo (requires repository push permissions).

Commands to push & open PR (run locally or allow me to run):
```bash
# push branch
git push origin feat/altovex-branding

# create PR with GitHub CLI
gh pr create --base main --head feat/altovex-branding --title "Rebrand site from DreamTeam to Altovex" --body PR_BODY.md
```

If you want me to push and create the PR now, confirm and I will proceed (I will not push without your permission).