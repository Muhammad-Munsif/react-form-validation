import axios from 'axios'
import React, { useState } from 'react'

const TableJson = () => {
    const [columns, setColumns] = useState({
        id : id,
        name : '',
        email : '',
        password : ''
    })
    const [records, setRecords] = useState()
    axios.get('http://localhost:5000/users')
    .then(res => setColumns(res.data))
    .catch(err => console.error("this is a problem")
    )
  return (
    <div>
      <table>
        <thead>
            {
                columns.map()
            }
        </thead>
      </table>
    </div>
  )
}

export default TableJson
