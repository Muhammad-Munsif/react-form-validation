import React, { useState } from "react";
import UserActions from "./UserActions";

const UserTable = ({ users, deleteUser, setEditingUser }) => {
  const [search, setSearch] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const recordsPerPage = 5;
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / recordsPerPage);
  const start = (page - 1) * recordsPerPage;
  const paginated = filtered.slice(start, start + recordsPerPage);

  return (
    <div>
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Password</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((u) => (
              <tr key={u.id} className="text-center">
                <td className="border p-2">{u.id}</td>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.password}</td>
                <td className="border p-2">
                  <UserActions
                    onEdit={() => setEditingUser(u)}
                    onDelete={() => deleteUser(u.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
