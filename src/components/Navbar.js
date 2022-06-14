import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
  
    const logout = () => {
      navigate('/');
    }
  
    return (
      <nav className="bg-gradient-to-r from-indigo-600 to-indigo-300 border-gray-200 px-2 py-5 dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div className='text-white text-3xl font-medium'>
                Bench Management
            </div>
          <div>
            <button type='button' className='text-white bg-red-700 hover:bg-red-900 font-medium rounded-lg text-sm px-5 py-2.5 mb-1 text-center float-right' onClick={logout}>
              LOGOUT
            </button>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar