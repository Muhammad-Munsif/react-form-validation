import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TableJson = () => {
  const [columns, setColumns] = useState([]);     // ❌ Fix: This must be an array
  const [records, setRecords] = useState([]);     // ❌ Fix: This must be an array

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]));   // ✔ Extract column names
        setRecords(res.data);                    // ✔ Correct way of setting data
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              {columns.map((col, i) => (
                <td key={i}>{item[col]}</td>      // ✔ Auto print by column name
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableJson;
