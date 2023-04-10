import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import GoogleIcon from "@mui/icons-material/Google";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const handleGoogleSignIn = useCallback(() => {
    void (async () => {
      setLoading(true);
      await signIn("google");
    })();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(/hero.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box sx={{ mt: 1 }}>
                <LoadingButton
                  fullWidth
                  variant="contained"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<GoogleIcon />}
                  sx={{ mt: 3 }}
                >
                  Sign In with Google
                </LoadingButton>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
