import React, { useState } from "react";
import { toast } from "react-toastify";
import { DeleteIcon, Edit, Eye, EyeOff } from "lucide-react";

const FormValidation = () => {
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTable, setShowPasswordTable] = useState({});
  const [errors, setErrors] = useState({});

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
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!inputData.firstName.trim()) {tempErrors.firstName = "First name is required";
    if (!inputData.lastName.trim()) {tempErrors.lastName = "Last name is required";}
    if (!inputData.fName.trim()) {tempErrors.fName = "Father's name is required";}
    if (!inputData.cnic.trim()) {tempErrors.cnic = "CNIC is required";}
    if (!inputData.email.trim()) {tempErrors.email = "Email is required";}
    if (!inputData.password.trim()) {tempErrors.password = "Password is required";}
    else if (!validatePassword(inputData.password)){
      tempErrors.password =
        "Password must have 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character"};
    if (!inputData.hobbies.trim()) {tempErrors.hobbies = "Hobbies is required";}
    if (!inputData.gender.trim()) {tempErrors.gender = "Gender is required";}

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  }
  const formSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = inputData;
      setTableData(updatedData);
      setEditIndex(null);
      toast.success("Record updated successfully!", { autoClose: 2000 });
    } else {
      setTableData([...tableData, inputData]);
      toast.success("Form data submitted successfully!", { autoClose: 2000 });
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
    setErrors({});
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    toast.info("Record deleted!", { autoClose: 2000 });
  };

  const handleEdit = (index) => {
    const selected = tableData[index];
    setInputData(selected);
    setEditIndex(index);
  };

  return (
    <div className="w-11/12 mx-auto my-5">
      {/* Form */}
      <div className="bg-white rounded-lg p-5 shadow-xl animate__animated animate__rollIn max-w-xl mx-auto">
        <h1 className="text-center font-bold text-2xl mb-5">Registration Form</h1>
        <form onSubmit={formSubmit}>
          {/* Names */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">First Name</label>
              <input
                name="firstName"
                value={inputData.firstName}
                onChange={handleFormData}
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Last Name</label>
              <input
                name="lastName"
                value={inputData.lastName}
                onChange={handleFormData}
                type="text"
                placeholder="Enter your last name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          {/* Father's Name & CNIC */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Father's Name</label>
              <input
                name="fName"
                value={inputData.fName}
                onChange={handleFormData}
                type="text"
                placeholder="Father's name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500"
              />
              {errors.fName && <p className="text-red-500 text-sm">{errors.fName}</p>}
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">CNIC No</label>
              <input
                name="cnic"
                value={inputData.cnic}
                onChange={handleFormData}
                type="text"
                placeholder="CNIC number"
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500"
              />
              {errors.cnic && <p className="text-red-500 text-sm">{errors.cnic}</p>}
            </div>
          </div>

          {/* Email & Password */}
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Email</label>
              <input
                name="email"
                value={inputData.email}
                onChange={handleFormData}
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="flex flex-col w-full sm:w-1/2 relative">
              <label className="font-semibold">Password</label>
              <input
                name="password"
                value={inputData.password}
                onChange={handleFormData}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </div>

          {/* Hobbies & Gender */}
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Hobbies</label>
              <input
                name="hobbies"
                value={inputData.hobbies}
                onChange={handleFormData}
                type="text"
                placeholder="Enter your hobbies"
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500"
              />
              {errors.hobbies && <p className="text-red-500 text-sm">{errors.hobbies}</p>}
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Gender</label>
              <select
                name="gender"
                value={inputData.gender}
                onChange={handleFormData}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-indigo-500 bg-white cursor-pointer"
              >
                <option value="">-- Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="mt-5">
        <div className="hidden sm:block overflow-y-auto max-h-[400px] border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">S.NO</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">First Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Father's Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">CNIC</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Password</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Hobbies</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Gender</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm">{index + 1}</td>
                  <td className="px-4 py-2 text-sm">{entry.firstName}</td>
                  <td className="px-4 py-2 text-sm">{entry.lastName}</td>
                  <td className="px-4 py-2 text-sm">{entry.fName}</td>
                  <td className="px-4 py-2 text-sm">{entry.cnic}</td>
                  <td className="px-4 py-2 text-sm">{entry.email}</td>
                  <td className="px-4 py-2 text-sm flex items-center gap-1">
                    {showPasswordTable[index] ? entry.password : "********"}
                    <button
                      onClick={() =>
                        setShowPasswordTable((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                    >
                      {showPasswordTable[index] ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </td>
                  <td className="px-4 py-2 text-sm">{entry.hobbies}</td>
                  <td className="px-4 py-2 text-sm">{entry.gender}</td>
                  <td className="px-4 py-2 text-sm flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      <Edit/>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      <DeleteIcon  />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden flex flex-col gap-4 mt-4">
          {tableData.map((entry, index) => (
            
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <div className="flex items-center justify-end gap-2 mt-2">
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
              <p><span className="font-semibold border-b">S.No:</span> {index + 1}</p>
              <p><span className="font-semibold">First Name:</span> {entry.firstName}</p>
              <p><span className="font-semibold">Last Name:</span> {entry.lastName}</p>
              <p><span className="font-semibold">Father's Name:</span> {entry.fName}</p>
              <p><span className="font-semibold">CNIC:</span> {entry.cnic}</p>
              <p><span className="font-semibold">Email:</span> {entry.email}</p>
              <p className="flex items-center gap-1">
                <span className="font-semibold">Password:</span>
                {showPasswordTable[index] ? entry.password : "********"}
                <button
                  onClick={() =>
                    setShowPasswordTable((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                >
                  {showPasswordTable[index] ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </p>
              <p><span className="font-semibold">Hobbies:</span> {entry.hobbies}</p>
              <p><span className="font-semibold">Gender:</span> {entry.gender}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
