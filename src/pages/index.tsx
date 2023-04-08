import Head from "next/head";
import SignInSide from "@/components/SignIn";
// import { AuthAction, useAuthUser, withAuthUser } from "next-firebase-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { Loader } from "@/components/Loader";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  // const AuthUser = useAuthUser();
  const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session?.user?.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn("google")}>Sign in with Google</button>
  //   </>
  // );
  return (
    <>
      <Head>
        <title>Symptom Diary</title>
        <meta name="description" content="Smarter Symptom Diary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://apis.google.com" />
      </Head>
      <>{!session ? <SignInSide /> : <Dashboard />}</>
    </>
  );
}

// export default withAuthUser({
//   whenAuthed: AuthAction.RENDER,
//   whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
//   whenUnauthedAfterInit: AuthAction.RENDER,
//   LoaderComponent: Loader,
// })(Home);
