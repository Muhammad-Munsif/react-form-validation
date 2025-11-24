import axios from "axios";
import React, { useEffect, useState } from "react";

const TableJson = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <table striped="columns" className="border border-gray-500">
        <thead className="bg-amber-50 p-4">
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <td>action</td>
          </tr>
        </thead>

        <tbody className="p-4">
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <div>
                  <button className="bg-red-6 px-4 py-2 rounded-lg text-center font-semibold">edit</button>
                  <button className="bg-red-6 px-4 py-2 rounded-lg text-center font-semibold">delete</button>
                </div>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableJson;
