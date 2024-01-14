import { Box, Container } from "@mui/material";
import TopBar from "../../components/TopBar/TopBar";

const Home = () => {
  return (
    <Container component="main" maxWidth="xs">
      <TopBar />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Home
      </Box>
    </Container>
  );
};

export default Home;
