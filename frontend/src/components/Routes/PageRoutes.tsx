import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import Home from "../../pages/Home/Home";
import {
  DEFAULT_ROUTE,
  HOME_ROUTE,
  STUDENT_ROUTE,
} from "../../constants/routes";
import Student from "../../pages/Student/Student";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={DEFAULT_ROUTE} element={<SignIn />} />
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={STUDENT_ROUTE} element={<Student />} />
    </Routes>
  );
};

export default PageRoutes;
