import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const RegistrationForm = ({ onSubmit, editData, isEditing, onCancelEdit }) => {
  const [showPassword, setShowPassword] = useState(false);
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

  // Populate form when editData changes
  React.useEffect(() => {
    if (editData) {
      setInputData(editData);
    } else {
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
    }
  }, [editData]);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!inputData.firstName.trim())
      tempErrors.firstName = "First name is required";
    if (!inputData.lastName.trim())
      tempErrors.lastName = "Last name is required";
    if (!inputData.fName.trim()) tempErrors.fName = "Father's name is required";
    if (!inputData.cnic.trim()) tempErrors.cnic = "CNIC is required";
    if (!inputData.email.trim()) tempErrors.email = "Email is required";
    if (!inputData.password.trim())
      tempErrors.password = "Password is required";
    else if (!validatePassword(inputData.password))
      tempErrors.password =
        "Password must have 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character";
    if (!inputData.hobbies.trim()) tempErrors.hobbies = "Hobbies is required";
    if (!inputData.gender.trim()) tempErrors.gender = "Gender is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit(inputData, isEditing);
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

  const handleCancel = () => {
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
    onCancelEdit();
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-xl animate__animated animate__rollIn max-w-xl mx-auto">
      <h1 className="text-center font-bold text-2xl mb-5">
        {isEditing ? "Edit Record" : "Registration Form"}
      </h1>
      <form onSubmit={formSubmit}>
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
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
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
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
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
            {errors.fName && (
              <p className="text-red-500 text-sm">{errors.fName}</p>
            )}
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
            {errors.cnic && (
              <p className="text-red-500 text-sm">{errors.cnic}</p>
            )}
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
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
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
            {errors.hobbies && (
              <p className="text-red-500 text-sm">{errors.hobbies}</p>
            )}
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
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="w-1/3 p-2 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={`p-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition ${
              isEditing ? "w-2/3" : "w-full"
            }`}
          >
            {isEditing ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
