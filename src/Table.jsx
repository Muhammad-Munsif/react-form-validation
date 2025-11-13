import React, { useState } from "react";

const Table = () => {

  return (
    <div className="min-h-screen h-100vh bg-white rounded-lg p-2 shadow-md w-9/12 mx-auto mt-5">
      <table className="bg-gray-200 mx-auto w-9/12 rounded-lg p-2">
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>F'Name</th>
            <th>CNIC No</th>
            <th>Email</th>
            <th>Password</th>
            <th>Hobbies</th>
            <th>Gender</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
   
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{fName}</td>
            <td>{cnic}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{hobbies}</td>
            <td>{gender}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Table;
