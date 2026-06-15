# Scope confirmation

You sent ~15 distinct asks in one message. Some are 2-minute tweaks, others are full features (course-image mapping for 70+ courses, contracted-schools registry, admin sample-cert page, search). I want to confirm the breakdown and order before I touch code so I don't waste your credits.

## A. Quick visual fixes (I'll do these in one pass)
1. Home hero: remove the sparkle icon next to "Free Learning · Certificate & Diploma Programs A-Z".
2. Home hero: make "Completely Free." light blue (solid), not gradient.
3. `/auth` STANDARD card: add the same light-blue outline ACADEMIA has.
4. `/privacy` and `/terms`: body text white, sub-headings purple.
5. `/privacy` and `/terms`: replace "Back to Home" with a back arrow that returns to `/auth` if that's where the user came from, else previous page.
6. Remove "Back to Home" buttons across other pages; replace with a simple back arrow that goes to history -1.
7. Dashboard (ACADEMIA users only): show two notes — "ACADEMIA Users Are To Pay At School Reception/Administration" and "You Shall Receive Both Soft & Hard Copies With No Additional Costs".

## B. Header 17-tap admin shortcut
Tap the navbar logo 17 times within a few seconds → opens `/admin-gate`. If the signed-in user has the admin role, grant a 1-hour client-side admin session token (sessionStorage with expiry) so `/admin` is reachable without re-auth for 1 hour. (Footer 7-tap stays as-is.)

## C. Course search bar
Add a search input at the top of `/courses` that filters the catalog by title/category as you type. Pure client-side, instant.

## D. Course images per category (biggest item)
You gave 4-7 image URLs per category but most categories have more courses than images. I will:
- Download each image once, upload to Lovable CDN (`lovable-assets`), and store as `.asset.json` pointers (so postimg.cc going down doesn't break the site).
- Map images to courses **in the order courses appear in each category**, cycling through the list if a category has more courses than images.
- Replace the lucide icon on course cards (`/courses`, `/course/$id`, dashboard tiles) with the mapped image.

Confirm: cycling is OK, or do you want me to pause and have you hand-map each course to a specific image? Hand-mapping = another long message from you.

## E. Admin: sample certificate manager
- New admin sub-page `/admin` → "Sample Certificate" tab.
- Admin edits student name, course name, level, date, certificate ID; saves to a new `sample_certificate` table (single row).
- Home page renders that sample certificate above the footer using the existing `CertificatePreview` component.
- Includes the PDF/print button using the existing cert template (this is the "must work" part).

## F. Admin: contracted-schools registry + ACADEMIA flow
- New `contracted_schools` table (name, country, contact, notes). Admin CRUD in `/admin` → "Schools" tab.
- On ACADEMIA signup: school is accepted regardless. If the entered `school_name` doesn't match any contracted school (case-insensitive trim), the new profile row is flagged `school_contracted=false`.
- Admin dashboard users table highlights non-contracted ACADEMIA users in amber.
- Their learner dashboard shows the long notice: "Your School has not been contracted, so Admin will reach you via formal Email or WhatsApp after you complete your course and you can pay via any of suggested possible means in relation to your country payment methods".

## G. Course-completion verification prompt
When a learner finishes the last module of a course, show a modal: "Please verify your details before we issue your credential" with editable full name + country + city + mobile + email (read-only). Saves to `profiles`. Then routes to the payment page.

## H. Things I will NOT do this turn (tell me which to keep)
- Replacing the dashboard course icons (only the `/courses` card icons are clearly in scope — confirm if you also want dashboard tiles and course detail page).
- Touching the existing certificate-payment flow beyond hooking the verification modal in front of it.

## I. Written answers (no code, just replies in chat after building)
After the build I'll answer in chat:
- End-to-end learner journey (signup → browse → learn → quiz → verify → pay → cert).
- What admin sees + does post-completion.
- What's in the admin dashboard and how each tab works.
- Whether everything is currently working (I'll spot-check key flows).
- Whether Google sign-in is supported on Lovable (short answer: yes via the Lovable broker — I'll confirm it's wired in your `/auth`).

## Order I'll build in
1. A (quick fixes) + C (search) + G (verify modal) + B (17-tap)  ← one batch
2. D (course images, asset uploads)  ← one batch
3. E + F (admin sample cert + schools registry, DB migration)  ← one batch, requires migration approval
4. Final chat answers for I.

## What I need from you
Reply with any of:
- "go" → proceed exactly as above with cycling images for D.
- "hand-map D" → I'll list each category's courses and you assign images.
- Edits/removals to any item.