import { Box } from "@mui/material";
import Student from "./StudentDataGrid/Student";

const Home = () => {
  return (
    <Box sx={{ py: 10, px: 10, height: "50vh" }}>
      <Student />
    </Box>
  );
};

export default Home;
