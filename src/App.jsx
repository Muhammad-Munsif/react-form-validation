import React from "react";
import "animate.css";
import FormValidation from "./components/FormValidation";
import { ToastContainer } from "react-toastify";
import TableJson from "./components/TableJson";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-10 h-screen no-scrollbar overflow-y-scroll">
      <TableJson/>
      <FormValidation />
      <ToastContainer />
    </div>
  );
};

export default App;
