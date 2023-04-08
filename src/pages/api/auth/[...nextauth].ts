import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import firebase from "firebase-admin";

const firebaseAdminCredentials = {
  // Replace these values with your actual Firebase credentials
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL ?? "",
  privateKey: (process.env.FIREBASE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
};

if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.cert(firebaseAdminCredentials),
  });
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  adapter: FirestoreAdapter(firebase.firestore()),
});
