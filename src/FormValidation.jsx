import React, { useState } from "react";
import { toast } from "react-toastify";
const FormValidation = () => {
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
    setInputData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    toast.success(console.log("Form data submitted", inputData ), {
        position : 'top-right',
        autoClose : 2000
    });
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

  return (
    <div className="bg-white rounded-lg w-full max-w-xl mx-auto p-5 mt-5 shadow-xl">
      <h1 className="text-center font-bold text-2xl mb-5">Registration Form</h1>
      <form>
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="first-name">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={inputData.firstName}
              onChange={handleFormData}
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="last-name">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              value={inputData.lastName}
              onChange={handleFormData}
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="father-name">
              Father's Name
            </label>
            <input
              id="fName"
              name="fName"
              value={inputData.fName}
              onChange={handleFormData}
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Father's name"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="cnic">
              CNIC No
            </label>
            <input
              id="cnic"
              name="cnic"
              value={inputData.cnic}
              onChange={handleFormData}
              type="number"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="CNIC number"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={inputData.email}
              onChange={handleFormData}
              type="email"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              value={inputData.password}
              onChange={handleFormData}
              type="password"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="hobbies">
              Hobbies
            </label>
            <input
              id="hobbies"
              name="hobbies"
              value={inputData.hobbies}
              onChange={handleFormData}
              type="text"
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
              placeholder="Enter your hobbies"
              readOnly
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-md font-semibold" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={inputData.gender}
              onChange={handleFormData}
              className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 bg-white cursor-pointer transition duration-150"
            >
              <option value="">-- Select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-2 outline-none border border-indigo-500 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            onClick={formSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
