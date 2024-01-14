import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import Home from "../../pages/Home/Home";
import { DEFAULT_ROUTE, HOME_ROUTE } from "../../constants/routes";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={DEFAULT_ROUTE} element={<SignIn />} />
      <Route path={HOME_ROUTE} element={<Home />} />
    </Routes>
  );
};

export default PageRoutes;
