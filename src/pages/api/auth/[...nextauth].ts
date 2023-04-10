// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// // import { FirestoreAdapter } from "@next-auth/firebase-adapter";
// // import firebase from "firebase-admin";

// // const firebaseAdminCredentials = {
// //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
// //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL ?? "",
// //   privateKey: (process.env.FIREBASE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
// // };

// // if (!firebase.apps.length) {
// //   firebase.initializeApp({
// //     credential: firebase.credential.cert(firebaseAdminCredentials),
// //   });
// // }

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   adapter: FirestoreAdapter(firebase.firestore()),
// };

// export default NextAuth(authOptions);

import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";

export default NextAuth(authOptions);
