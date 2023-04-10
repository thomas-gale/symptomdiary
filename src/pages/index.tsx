import Head from "next/head";
// import { authOptions } from "~/pages/api/auth/[...nextauth]";
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { GetServerSideProps, type NextPage } from "next";
import Link from "next/link";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import SignIn from "~/components/SignIn";
import Dashboard from "~/components/dashboard/Dashboard";

const Home: NextPage<{ session: Session | null }> = ({
  session,
}: {
  session: Session | null;
}) => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
      <p className="text-2xl text-purple-600">
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </p>
      <>{!session ? <SignIn /> : <Dashboard />}</>
    </>
  );
};

// const Home: NextPage<{ session: Session | null }> = ({
//   session,
// }: {
//   session: Session | null;
// }) => {
//   const hello = api.example.hello.useQuery({ text: "from tRPC" });

//   return (
//     <>
//       <Head>
//         <title>Create T3 App</title>
//         <meta name="description" content="Generated by create-t3-app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
//         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
//           <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
//             Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
//           </h1>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/usage/first-steps"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">First Steps →</h3>
//               <div className="text-lg">
//                 Just the basics - Everything you need to know to set up your
//                 database and authentication.
//               </div>
//             </Link>
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/introduction"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">Documentation →</h3>
//               <div className="text-lg">
//                 Learn more about Create T3 App, the libraries it uses, and how
//                 to deploy it.
//               </div>
//             </Link>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             {/* <p className="text-2xl text-white">
//               {hello.data ? hello.data.greeting : "Loading tRPC query..."}
//             </p> */}
//             {/* <AuthShowcase sessionData={session} /> */}
//             <AuthShowcase />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

export default Home;

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

// const AuthShowcase = ({ sessionData }: { sessionData: Session | null }) => {
// const AuthShowcase = () => {
//   const { data: sessionData } = useSession();

//   // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//   //   undefined, // no input
//   //   { enabled: sessionData?.user !== undefined }
//   // );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {/* {secretMessage && <span> - {secretMessage}</span>} */}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
