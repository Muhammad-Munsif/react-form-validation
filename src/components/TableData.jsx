import React, { useState } from "react";
import { Eye, EyeOff, Search } from "lucide-react";

const DataTable = ({ data, onEdit, onDelete }) => {
  const [tablePassword, setTablePassword] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Search logic inside DataTable
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const togglePasswordVisibility = (index) => {
    setTablePassword((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mt-5 overflow-x-hidden">
      {/* Desktop Table with Custom Scrollbar */}
      <div className="hidden sm:block max-h-[200px] sticky top-0 z-10 overflow-y-auto border border-gray-200 rounded-lg shadow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded">
        {/* Add Search Bar in DataTable */}

        <div className="relative ">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black font-semibold"
            size={20}
          />
          <input
            type="text"
            placeholder="Search in records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white"
          />
        </div>

        <table className="min-w-full divide-y divide-gray-200 overflow-x-hidden">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S.NO
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Father's Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CNIC
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Password
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hobbies
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((entry, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {entry.firstName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {entry.lastName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {entry.fName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {entry.cnic}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {entry.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="font-mono">
                      {tablePassword[index] ? entry.password : "********"}
                    </span>
                    <button
                      onClick={() => togglePasswordVisibility(index)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                      title={
                        tablePassword[index] ? "Hide password" : "Show password"
                      }
                    >
                      {tablePassword[index] ? (
                        <EyeOff className="text-gray-600" size={14} />
                      ) : (
                        <Eye className="text-gray-600" size={14} />
                      )}
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {entry.hobbies}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      entry.gender === "Male"
                        ? "bg-blue-100 text-blue-800"
                        : entry.gender === "Female"
                        ? "bg-pink-100 text-pink-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {entry.gender}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards with Custom Scrollbar */}
      <div className="sm:hidden">
        <div className="max-h-[400px] overflow-y-auto flex flex-col gap-3 p-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded">
          {filteredData.map((entry, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg border-l-4 border-indigo-600 rounded-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b">
                <span className="font-bold text-lg text-gray-800">
                  s.no {index + 1}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(index)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-semibold text-gray-700">
                      First Name:
                    </span>
                    <p className="text-gray-900">{entry.firstName}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Last Name:
                    </span>
                    <p className="text-gray-900">{entry.lastName}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    Father's Name:
                  </span>
                  <p className="text-gray-900">{entry.fName}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">CNIC:</span>
                  <p className="text-gray-900 font-mono">{entry.cnic}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <p className="text-gray-900 break-all">{entry.email}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Password:</span>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="font-mono">
                      {tablePassword[index] ? entry.password : "********"}
                    </span>
                    <button
                      onClick={() => togglePasswordVisibility(index)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      {tablePassword[index] ? (
                        <EyeOff className="text-gray-600" size={14} />
                      ) : (
                        <Eye className="text-gray-600" size={14} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Hobbies:</span>
                  <p className="text-gray-900">{entry.hobbies}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Gender:</span>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ml-2 ${
                      entry.gender === "Male"
                        ? "bg-blue-100 text-blue-800"
                        : entry.gender === "Female"
                        ? "bg-pink-100 text-pink-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {entry.gender}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">
            {searchTerm ? "No matching records found" : "No records found"}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {searchTerm
              ? "Try a different search term"
              : "Submit the form above to add records"}
          </p>
        </div>
      )}
    </div>
  );
};

