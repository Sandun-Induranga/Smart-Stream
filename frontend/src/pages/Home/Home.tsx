import { Box } from "@mui/material";
import TopBar from "../../components/TopBar/TopBar";

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh", p: 0 }}>
      <TopBar />
      <Box
        sx={{
          height: "90vh",
          // background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Home</h1>
      </Box>
    </Box>
  );
};

export default Home;
