import React from "react";

const UserActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex gap-2">
      <button
        className="bg-yellow-500 text-white px-4 py-1 rounded-lg"
        onClick={onEdit}
      >
        Edit
      </button>

      <button
        className="bg-red-600 text-white px-4 py-1 rounded-lg"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default UserActions;
