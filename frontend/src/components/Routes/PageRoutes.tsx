import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default PageRoutes;
