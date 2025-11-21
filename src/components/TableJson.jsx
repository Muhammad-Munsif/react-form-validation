import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TableJson = () => {
  const [columns, setColumns] = useState([ID, name, email, password]);    
  const [records, setRecords] = useState([]);     

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]));   
        setRecords(res.data);                    
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
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableJson;
