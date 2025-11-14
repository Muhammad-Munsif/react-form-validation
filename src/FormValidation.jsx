import React, { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff, Edit, Trash } from "lucide-react";

const FormValidation = () => {
  const [tableData, setTableData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
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

  // Password Regex (1 capital, 1 small, 1 number, 1 special char, 8 chars)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    // VALIDATION CHECKS
    if (!inputData.firstName.trim()) {
      return toast.error("First Name is required");
    }
    if (!inputData.lastName.trim()) {
      return toast.error("Last Name is required");
    }
    if (!inputData.fName.trim()) {
      return toast.error("Father's Name is required");
    }
    if (!inputData.cnic.trim()) {
      return toast.error("CNIC is required");
    }
    if (!emailRegex.test(inputData.email)) {
      return toast.error("Enter a valid email (e.g., a123@gmail.com)");
    }
    if (!passwordRegex.test(inputData.password)) {
      return toast.error(
        "Password must contain 1 capital, 1 small, 1 number, 1 special character, and 8 characters long"
      );
    }
    if (!inputData.hobbies.trim()) {
      return toast.error("Hobbies are required");
    }
    if (!inputData.gender) {
      return toast.error("Please select gender");
    }

    // EDIT DATA
    if (editIndex !== null) {
      let updated = [...tableData];
      updated[editIndex] = inputData;
      setTableData(updated);
      setEditIndex(null);
      toast.success("Record updated successfully!");
    } else {
      setTableData([...tableData, inputData]);
      toast.success("Form submitted successfully!");
    }

    // RESET FORM
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

  // DELETE ROW
  const deleteRow = (index) => {
    const updated = tableData.filter((_, i) => i !== index);
    setTableData(updated);
    toast.success("Record deleted");
  };

  // EDIT ROW
  const editRow = (index) => {
    setInputData(tableData[index]);
    setEditIndex(index);
  };

  return (
    <>
      {/* ================= FORM ================= */}
      <div className="bg-white rounded-lg w-full max-w-xl mx-auto p-5 mt-5 shadow-xl">
        <h1 className="text-center font-bold text-2xl mb-5">
          Registration Form
        </h1>

        <form>
          {/* NAMES */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">First Name</label>
              <input
                name="firstName"
                value={inputData.firstName}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Last Name</label>
              <input
                name="lastName"
                value={inputData.lastName}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Father Name + CNIC */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Father's Name</label>
              <input
                name="fName"
                value={inputData.fName}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg"
                type="text"
                placeholder="Father's name"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">CNIC No</label>
              <input
                name="cnic"
                value={inputData.cnic}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg"
                type="number"
                placeholder="CNIC number"
              />
            </div>
          </div>

          {/* Email + Password */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Email</label>
              <input
                name="email"
                value={inputData.email}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg"
                type="email"
                placeholder="a123@gmail.com"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2 relative">
              <label className="font-semibold">Password</label>
              <input
                name="password"
                value={inputData.password}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg"
                type={showPassword ? "text" : "password"}
                placeholder="Enter strong password"
              />

              {/* Eye Icon */}
              <span
                className="absolute right-3 top-9 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Hobbies + Gender */}
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Hobbies</label>
              <input
                name="hobbies"
                value={inputData.hobbies}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg"
                type="text"
                placeholder="Enter your hobbies"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Gender</label>
              <select
                name="gender"
                value={inputData.gender}
                onChange={handleFormData}
                className="w-full p-2 outline-none border border-gray-300 rounded-lg bg-white"
              >
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            onClick={formSubmit}
            className="w-full p-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
          >
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-lg p-2 w-11/12 mx-auto mt-5 shadow border border-gray-200 max-h-[400px] overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">S.No</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Father's Name</th>
              <th className="px-4 py-2">CNIC</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Hobbies</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tableData.map((d, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{d.firstName}</td>
                <td className="px-4 py-2">{d.lastName}</td>
                <td className="px-4 py-2">{d.fName}</td>
                <td className="px-4 py-2">{d.cnic}</td>
                <td className="px-4 py-2">{d.email}</td>
                <td className="px-4 py-2">{d.hobbies}</td>
                <td className="px-4 py-2">{d.gender}</td>

                <td className="px-4 py-2 flex gap-3">
                  <button
                    onClick={() => editRow(index)}
                    className="text-blue-600"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => deleteRow(index)}
                    className="text-red-600"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-lg p-2 w-11/12 mx-auto mt-5 shadow border border-gray-200 max-h-[400px] overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-2">S.No</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Father's Name</th>
              <th className="px-4 py-2">CNIC</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Hobbies</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tableData.map((d, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{d.firstName}</td>
                <td className="px-4 py-2">{d.lastName}</td>
                <td className="px-4 py-2">{d.fName}</td>
                <td className="px-4 py-2">{d.cnic}</td>
                <td className="px-4 py-2">{d.email}</td>
                <td className="px-4 py-2">{d.hobbies}</td>
                <td className="px-4 py-2">{d.gender}</td>
                <td className="px-4 py-2 flex gap-3">
                  <button
                    onClick={() => editRow(index)}
                    className="text-blue-600"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => deleteRow(index)}
                    className="text-red-600"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormValidation;
