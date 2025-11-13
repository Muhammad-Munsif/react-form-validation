import React from 'react'
import FormValidation from './FormValidation'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-200 py-10'>
      <FormValidation/>
      <ToastContainer/>
    </div>
  )
}

export default App
