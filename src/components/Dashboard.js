import React from 'react'
import AddButton from './AddButton';
import EmployeesList from './EmployeesList';
import Navbar from './Navbar';

const Dashboard = () => {

  return (
    <div className='relative h-screen w-screen float-right'>
      <Navbar />
      <EmployeesList />
      <AddButton />
    </div>
 
  )
}

export default Dashboard