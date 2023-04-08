import Head from "next/head";
import SignInSide from "@/components/SignIn";
import { useSession } from "next-auth/react";
import Dashboard from "@/components/dashboard/Dashboard";
import { Session, getServerSession } from "next-auth";
import { GetServerSideProps } from "next";
import authOptions from "@/pages/api/auth/[...nextauth]";

export default function Home({ session }: { session: Session | null }) {
  // const { data: session } = useSession();

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

// Add server side rendering for preventing flash of unauthenticated content
export const getServerSideProps: GetServerSideProps<{
  session: Session | null;
}> = async (context) => {
  const session = (await getServerSession(
    context.req,
    context.res,
    authOptions
  )) as Session;

  return {
    props: { session },
  };
};
