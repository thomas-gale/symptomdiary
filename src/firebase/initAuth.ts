import { init } from "next-firebase-auth";
import { firebaseConfig } from "./config";

const initAuth = () => {
  init({
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    // firebaseAuthEmulatorHost: "localhost:9099",
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL ?? "",
        privateKey: (process.env.FIREBASE_PRIVATE_KEY ?? "").replace(
          /\\n/g,
          "\n"
        ),
      },
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ?? "",
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      ...firebaseConfig,
      // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "", // required
      // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
      // // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ?? "", // Check when needed
      // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
    },
    cookies: {
      name: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
