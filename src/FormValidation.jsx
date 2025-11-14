import React, { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const FormValidation = () => {
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    fName: "",
    cnic: "",
    email: "",
    password: "",
    hobbies: "",
    gender: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ⭐ Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const formSubmit = (e) => {
    e.preventDefault();

    // ⭐ Fix validation (your old code was incorrect)
    if (inputData.firstName.trim() === "") {
      toast.error("First name is required");
      return;
    }
    if (inputData.lastName.trim() === "") {
      toast.error("Last name is required");
      return;
    }
    if (inputData.fName.trim() === "") {
      toast.error("Father's name is required");
      return;
    }
    if (inputData.cnic.trim() === "") {
      toast.error("CNIC is required");
      return;
    }

    if (inputData.email.trim() === "") {
      toast.error("Email is required");
      return;
    }
    if (!emailRegex.test(inputData.email)) {
      toast.error("Enter a valid email (e.g. a123@gmail.com)");
      return;
    }

    if (inputData.password.trim() === "") {
      toast.error("Password is required");
      return;
    }
    if (!passwordRegex.test(inputData.password)) {
      toast.error(
        "Password must include uppercase, lowercase, number, special character & minimum 8 characters"
      );
      return;
    }

    if (inputData.hobbies.trim() === "") {
      toast.error("Hobbies are required");
      return;
    }

    if (inputData.gender.trim() === "") {
      toast.error("Gender is required");
      return;
    }

    // ⭐ Save data
    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = inputData;
      setTableData(updatedData);
      setEditIndex(null);

      toast.success("Record updated successfully!");
    } else {
      setTableData([...tableData, inputData]);
      toast.success("Form submitted successfully!");
    }

    // Reset fields
    setInputData({
      firstName: "",
      lastName: "",
      fName: "",
      cnic: "",
      email: "",
      password: "",
      hobbies: "",
      gender: "",
    });
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    toast.info("Record deleted!");
  };

  const handleEdit = (index) => {
    const selected = tableData[index];
    setInputData(selected);
    setEditIndex(index);
  };

  return (
    <>
      {/* FORM */}
      <div className="bg-white rounded-lg w-full max-w-xl mx-auto p-5 mt-5 shadow-xl">
        <h1 className="text-center font-bold text-2xl mb-5">
          Registration Form
        </h1>

        <form onSubmit={formSubmit}>
          {/* Form Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">First Name</label>
              <input
                name="firstName"
                value={inputData.firstName}
                onChange={handleFormData}
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">Last Name</label>
              <input
                name="lastName"
                value={inputData.lastName}
                onChange={handleFormData}
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">Father's Name</label>
              <input
                name="fName"
                value={inputData.fName}
                onChange={handleFormData}
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Father's name"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">CNIC No</label>
              <input
                name="cnic"
                value={inputData.cnic}
                onChange={handleFormData}
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="CNIC number"
              />
            </div>
          </div>

          {/* Email + Password */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">Email</label>
              <input
                name="email"
                value={inputData.email}
                onChange={handleFormData}
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            {/* ⭐ Password + Eye Toggle */}
            <div className="flex flex-col w-full sm:w-1/2 relative">
              <label className="text-md font-semibold">Password</label>

              <input
                name="password"
                value={inputData.password}
                onChange={handleFormData}
                type={showPassword ? "text" : "password"}
                className="w-full p-2 pr-12 border rounded-lg"
                placeholder="Enter your password"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Hobbies + Gender */}
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">Hobbies</label>
              <input
                name="hobbies"
                value={inputData.hobbies}
                onChange={handleFormData}
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your hobbies"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">Gender</label>
              <select
                name="gender"
                value={inputData.gender}
                onChange={handleFormData}
                className="w-full p-2 border rounded-lg bg-white"
              >
                <option value="">-- Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-indigo-600 text-white rounded-lg"
          >
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormValidation;
