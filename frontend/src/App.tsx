import { Provider } from "react-redux";
import Prediction from "./containers/Prediction/Prediction";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./containers/Prediction/Prediction";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      {/* <Prediction /> */}
      <Home />
    </Provider>
  );
};

export default App;
