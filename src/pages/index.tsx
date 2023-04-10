import Head from "next/head";
import { type GetServerSideProps, type NextPage } from "next";
import { type Session, getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import SignIn from "~/components/SignIn";
import Dashboard from "~/components/dashboard/Dashboard";

const Home: NextPage<{ session: Session | null }> = ({
  session,
}: {
  session: Session | null;
}) => {
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
      <>{!session ? <SignIn /> : <Dashboard />}</>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  session: Session | null;
}> = async (context) => {
  const session: Session | null = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  return {
    props: { session },
  };
};

export default Home;
