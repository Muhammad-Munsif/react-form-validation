import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const TableData = ({ data, onEdit, onDelete }) => {
  const [tablePassword, setTablePassword] = useState({});

  const togglePasswordVisibility = (index) => {
    setTablePassword((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mt-5">
      {/* Desktop Table */}
      <div className="hidden sm:block max-h-[300px] overflow-y-auto border border-gray-200 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                S.NO
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                First Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Last Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Father's Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                CNIC
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Password
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Hobbies
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Gender
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-sm">{index + 1}</td>
                <td className="px-4 py-2 text-sm">{entry.firstName}</td>
                <td className="px-4 py-2 text-sm">{entry.lastName}</td>
                <td className="px-4 py-2 text-sm">{entry.fName}</td>
                <td className="px-4 py-2 text-sm">{entry.cnic}</td>
                <td className="px-4 py-2 text-sm">{entry.email}</td>
                <td className="px-4 py-2 text-sm flex items-center gap-1">
                  {tablePassword[index] ? entry.password : "********"}
                  <button onClick={() => togglePasswordVisibility(index)}>
                    {tablePassword[index] ? (
                      <EyeOff
                        className="text-gray-700 cursor-pointer"
                        size={16}
                      />
                    ) : (
                      <Eye className="text-gray-700 cursor-pointer" size={16} />
                    )}
                  </button>
                </td>
                <td className="px-4 py-2 text-sm">{entry.hobbies}</td>
                <td className="px-4 py-2 text-sm">{entry.gender}</td>
                <td className="px-4 py-2 text-sm flex gap-2">
                  <button
                    onClick={() => onEdit(index)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
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

      {/* Mobile Cards */}
      <div className="sm:hidden flex flex-col gap-4 mt-4">
        {data.map((entry, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow border-l-4 border-indigo-700 rounded-s-lg"
          >
            <div className="flex items-center justify-end gap-2 mb-3">
              <button
                onClick={() => onEdit(index)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
            <p>
              <span className="font-semibold border-b">S.No:</span> {index + 1}
            </p>
            <p>
              <span className="font-semibold">First Name:</span> {entry.firstName}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span> {entry.lastName}
            </p>
            <p>
              <span className="font-semibold">Father's Name:</span> {entry.fName}
            </p>
            <p>
              <span className="font-semibold">CNIC:</span> {entry.cnic}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {entry.email}
            </p>
            <p className="flex items-center gap-1">
              <span className="font-semibold">Password:</span>
              {tablePassword[index] ? entry.password : "********"}
              <button onClick={() => togglePasswordVisibility(index)}>
                {tablePassword[index] ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
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
  );
};

export default TableData;