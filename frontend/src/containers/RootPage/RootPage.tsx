import { Route, Routes } from "react-router-dom";
import {
  HOME_ROUTE,
  PREDICT_ROUTE,
  STUDENT_ROUTE,
} from "../../constants/routes";
import { Home } from "@mui/icons-material";
import Student from "../Student/Student";
import Prediction from "../Prediction/Prediction";

const RootPage = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={STUDENT_ROUTE} element={<Student />} />
      <Route path={PREDICT_ROUTE} element={<Prediction />} />
    </Routes>
  );
};

export default RootPage;
