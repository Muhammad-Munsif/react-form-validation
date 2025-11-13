import React, { useState } from "react";
import { toast } from "react-toastify";

const FormValidation = () => {
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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

  const formSubmit = (e) => {
    e.preventDefault();

    if (
      !inputData.firstName ||
      !inputData.lastName ||
      !inputData.fName ||
      !inputData.cnic ||
      !inputData.email ||
      !inputData.password ||
      !inputData.hobbies ||
      !inputData.gender
    ) {
      toast.error("Please fill all fields properly!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = inputData;
      setTableData(updatedData);
      setEditIndex(null);
      toast.success("Record updated successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      setTableData([...tableData, inputData]);
      toast.success("Form data submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
    }

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
    toast.info("Record deleted!", {
      position: "top-right",
      autoClose: 2000,
    });
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
                className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
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
                className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
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
                className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
                placeholder="Father's name"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">CNIC No</label>
              <input
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
              <label className="text-md font-semibold">Email</label>
              <input
                name="email"
                value={inputData.email}
                onChange={handleFormData}
                type="email"
                className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">Password</label>
              <input
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
              <label className="text-md font-semibold">Hobbies</label>
              <input
                name="hobbies"
                value={inputData.hobbies}
                onChange={handleFormData}
                type="text"
                className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-150"
                placeholder="Enter your hobbies"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-md font-semibold">Gender</label>
              <select
                name="gender"
                value={inputData.gender}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 bg-white cursor-pointer transition duration-150"
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
            className="w-full p-2 outline-none border border-indigo-500 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* RESPONSIVE TABLE / CARD */}
      <div className="min-h-screen w-11/12 mx-auto mt-5">
        {/* Desktop Table */}
        <div className="hidden sm:block bg-white rounded-lg shadow overflow-x-auto border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 sticky top-0 z-10 ">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.NO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Father's Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CNIC
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hobbies
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.firstName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.fName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.cnic}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.password}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.hobbies}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.gender}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden flex flex-col gap-4">
          {tableData.map((entry, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow border border-gray-200 flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <span className="font-semibold">S.No {index + 1}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p>
                <span className="font-semibold">First Name:</span>
                {entry.firstName}
              </p>
              <p>
                <span className="font-semibold">Last Name:</span>
                {entry.lastName}
              </p>
              <p>
                <span className="font-semibold">Father's Name:</span>
                {entry.fName}
              </p>
              <p>
                <span className="font-semibold">CNIC:</span> {entry.cnic}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {entry.email}
              </p>
              <p>
                <span className="font-semibold">Password:</span>
                {entry.password}
              </p>
              <p>
                <span className="font-semibold">Hobbies:</span> {entry.hobbies}
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {entry.gender}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormValidation;
