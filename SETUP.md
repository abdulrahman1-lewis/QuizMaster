# Running QuizMaster locally (Node.js)

Requires Node 20.19+ and npm.

1. Install frontend deps:      `npm install`
2. Install functions deps:     `cd functions && npm install && cd ..`
3. Copy `.env.example` to `.env` and fill in your Firebase web-app keys
4. Start the frontend:         `npm run dev`
5. (Optional) Firebase emulators for the Cloud Functions / Firestore: `npm run emulators`
6. Tests:                      `npm test`
7. Production build:           `npm run build`

Stack: React 18 + Vite + Tailwind (frontend), Firebase Auth/Firestore, Node 20 Cloud Functions in `functions/`.
Note: `.firebaserc` points at the original team's Firebase projects. To use your own, run `firebase use --add`.
