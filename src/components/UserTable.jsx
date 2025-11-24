import React from "react";
import UserActions from "./UserActions";

const UserTable = ({ users, deleteUser, setEditingUser }) => {
  return (
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
          {users.map((u) => (
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
  );
};

export default UserTable;
