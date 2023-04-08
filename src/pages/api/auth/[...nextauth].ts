import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import firebase from "firebase-admin";
// import { signInWithEmailAndPassword } from "firebase/auth";

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
    // CredentialsProvider({
    //   // The name to display on the sign-in form (e.g., 'Sign in with...')
    //   name: "Email and Password",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "email@example.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const { email, password } = credentials;

    //     try {
    //       const auth = firebase.auth();
    //       const userCredential = await signInWithEmailAndPassword(
    //         auth,
    //         email,
    //         password
    //       );
    //       const user = userCredential.user;

    //       if (user) {
    //         return {
    //           id: user.uid,
    //           name: user.displayName,
    //           email: user.email,
    //           image: user.photoURL,
    //         };
    //       }
    //     } catch (error) {
    //       console.error("Error signing in with email and password:", error);
    //       return null;
    //     }
    //   },
    // }),
    // Add other providers as needed
  ],
  adapter: FirestoreAdapter(firebase.firestore()),
});
