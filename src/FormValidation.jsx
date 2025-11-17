import React, { useState } from "react";
import { toast } from "react-toastify";
import RegistrationForm from "./RegistrationForm";
import TableData from "./TableData";

const FormValidation = () => {
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (formData, isEdit) => {
    if (isEdit) {
      const updatedData = [...tableData];
      updatedData[editIndex] = formData;
      setTableData(updatedData);
      setEditIndex(null);
      toast.success("Record updated successfully!", { autoClose: 2000 });
    } else {
      setTableData([...tableData, formData]);
      toast.success("Form data submitted successfully!", { autoClose: 2000 });
    }
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    toast.info("Record deleted!", { autoClose: 2000 });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    return tableData[index];
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="w-11/12 mx-auto my-5">
      <RegistrationForm
        onSubmit={handleFormSubmit}
        editData={editIndex !== null ? tableData[editIndex] : null}
        isEditing={editIndex !== null}
        onCancelEdit={cancelEdit}
      />

      <TableData data={tableData} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default FormValidation;
