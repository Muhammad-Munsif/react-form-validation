import React from "react";
import "animate.css";
import FormValidation from "./components/FormValidation";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-10 h-screen no-scrollbar overflow-y-scroll">
      <FormValidation />
      <ToastContainer />
    </div>
  );
};

export default App;
