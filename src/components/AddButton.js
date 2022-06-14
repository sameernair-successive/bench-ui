import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddButton = () => {

    let navigate = useNavigate();

    const addEmployee = () => {
        navigate('/employees/add')
    }

    return (
        <div>
            <div
                className='absolute bottom-0 right-0 h-16 w-16 m-8 rounded-full bg-indigo-700 hover:bg-indigo-500 text-red text-center text-white font-bold text-4xl cursor-pointer pt-2'
                onClick={addEmployee}
            >+
            </div>
        </div>
    )
}

export default AddButton