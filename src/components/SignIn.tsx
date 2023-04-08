import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { Loader } from "./Loader";
import { signIn } from "next-auth/react";

export default function SignInSide() {
  // const [loggingIn, setLoggingIn] = React.useState(false);
  // const handleSubmit = React.useCallback(
  //   async (event: React.FormEvent<HTMLFormElement>) => {
  //     setLoggingIn(true);
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     try {
  //       const userCredential = await signInWithEmailAndPassword(
  //         auth,
  //         data.get("email") as string,
  //         data.get("password") as string
  //       );
  //       const user = userCredential.user;
  //       const idToken = await user.getIdToken();

  //       const response = await fetch("/api/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${idToken}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         console.error("Login failed");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoggingIn(false);
  //     }
  //   },
  //   []
  // );

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
              <Box
                // component="form"
                // noValidate
                // onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                /> */}
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  onClick={() => signIn("google")}
                  startIcon={<GoogleIcon />}
                  sx={{ mt: 3 }}
                >
                  Sign In with Google
                </Button>
                {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* <Modal open={loggingIn}>
        <Loader />
      </Modal> */}
    </>
  );
}
