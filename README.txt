Holiday Pet Helpers – Version 5 Cloud Edition

What this version adds
- Firebase Authentication for admin sign-in
- Cloud Firestore for reviews, bookings, blocked dates, and max pets per day
- Private admin page (admin.html)
- Reviews and bookings that persist across devices
- Multi-page site ready for GitHub Pages
- SVG pet illustrations and PWA files

Files included
- index.html
- about.html
- reviews.html
- location.html
- admin.html
- style.css
- app.js
- admin.js
- firebase-config.js
- firestore.rules.txt
- service-worker.js
- manifest.json
- images/

SETUP STEPS

PART 1 — FIREBASE
1. Create a Firebase project.
2. Add a Web app to the project and copy its firebaseConfig.
3. Open firebase-config.js and paste in the values.
4. In Firebase Authentication, enable Email/Password sign-in.
5. Create your admin user in Firebase Authentication with the same email you place in firebase-config.js.
6. Create a Cloud Firestore database.
7. Open the Firestore Rules tab and paste in firestore.rules.txt, then publish the rules.
8. Optional: in Firestore, create document site/config with:
   blockedDates: []
   maxPetsPerDay: 3

PART 2 — GITHUB PAGES
1. Create a new PUBLIC GitHub repository, for example:
   holiday-pet-helpers
2. Upload every file and folder from this ZIP to the repository root.
3. On GitHub, open the repository.
4. Go to Settings.
5. Open Pages in the left sidebar.
6. Under Build and deployment, choose:
   Source: Deploy from a branch
7. Choose:
   Branch: main
   Folder: /(root)
8. Save.
9. Wait for the Pages deployment to finish.
10. Your site should appear at:
   https://YOUR-USERNAME.github.io/holiday-pet-helpers/

IMPORTANT
- Change the booking email address inside app.js from hello@holidaypethelpers.com to your real email.
- The public site links to Home, About, Reviews and Location only.
- Admin access is through the separate admin.html page.
