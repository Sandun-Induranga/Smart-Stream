import { useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import signInImage from "../../assets/sign-in.jpg";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../constants/routes";
import { toast } from "react-toastify";

interface ISignInData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const signInData: ISignInData = {
      email: email,
      password: password,
    };
    if (
      signInData.email === "admin@gmail.com" &&
      signInData.password === "admin"
    ) {
      navigate(HOME_ROUTE);
      toast("Successfully Signed In", { type: "success" });
    } else {
      toast("Invalid Credentials", { type: "error" });
    }
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height={"100vh"}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          sx={{
            height: 400,
            backgroundImage: `url(${signInImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        ></Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card
            sx={{
              px: 2,
              height: 400,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h4"
              color={"GrayText"}
              align="center"
              sx={{ mt: 2 }}
            >
              Sign In
            </Typography>
            <TextField
              label="Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Typography
              align="center"
              variant="body1"
              sx={{ mt: 4, cursor: "pointer" }}
            >
              Don&apos; t have an account?{" "}
              <Typography onClick={() => {}} component="span" color="primary">
                Register
              </Typography>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
