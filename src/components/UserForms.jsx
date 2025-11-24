import React, { useEffect, useState } from "react";

const UserForm = ({ addUser, editingUser, updateUser }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUser(form);
    } else {
      addUser(form);
    }

    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded-lg mb-6"
    >
      <h2 className="text-xl font-semibold mb-3">
        {editingUser ? "Edit User" : "Add New User"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          className="border p-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          className="border p-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          className="border p-2 rounded"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
