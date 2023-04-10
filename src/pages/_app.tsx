import * as React from "react";
import Head from "next/head";
import { type AppProps } from "next/app";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, type EmotionCache } from "@emotion/react";
import theme from "~/env/theme";
import createEmotionCache from "~/env/createEmotionCache";
import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";

import { api } from "~/utils/api";

import "~/styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface SymptomAppProps extends AppProps {
  emotionCache?: EmotionCache;
  session?: Session;
}

function SymptomApp(props: SymptomAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    session,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    pageProps,
  } = props;
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export default api.withTRPC(SymptomApp);
