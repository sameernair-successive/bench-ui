import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {

    let navigate = useNavigate();
    const { id } = useParams();

    const [inputs, setInputs] = useState({
        employeeId: "",
        firstName: "",
        lastName: "",
        email: "",
        totalExperience: "",
        relevantExperience: "",
        javascript: "",
        react: "",
        node: "",
        mongodb: ""
    });

    const getEmployeeDetails = async () => {
        const response =  await fetch(`http://localhost:5000/api/employee/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        console.log(data);
        setInputs(data);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { employeeId, firstName, lastName, email, totalExperience, relevantExperience, javascript, react, node, mongodb } = inputs;

        const response = await fetch(`http://localhost:5000/api/employee/edit/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                employeeId, firstName, lastName, email, totalExperience, relevantExperience, javascript, react, node, mongodb
            })
        });

        const data = await response.json();
        console.log(data);
        setInputs(data);
        navigate('/dashboard');
    }

    const cancelForm = () => {
        navigate('/dashboard');
    }

    useEffect(() => {
        getEmployeeDetails();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputs(values => ({
            ...values,
            [name]: value
        }));
    }
    
  return (
    <div>
        <Navbar />
        <form className='mx-16 my-6' onSubmit={handleSubmit}>
            <div className="mb-6">
                <label for="empid" className="block mb-2 text-sm font-medium text-gray-900">Employee Id</label>
                <input type="text" name="employeeId" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" onChange={handleChange} value={inputs.employeeId || ""} />
            </div>
            <div className="mb-6">
                <label for="fname" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                <input type="text" name="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" onChange={handleChange} value={inputs.firstName || ""} />
            </div>
            <div className="mb-6">
                <label for="lname" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                <input type="text" name="lastName"className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" onChange={handleChange} value={inputs.lastName || ""} />
            </div>
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email Id</label>
                <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" onChange={handleChange} value={inputs.email || ""} />
            </div>
            <div className="mb-6">
                <label for="texperience" className="block mb-2 text-sm font-medium text-gray-900">Total Experience</label>
                <input type="number" name="totalExperience" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" onChange={handleChange} value={inputs.totalExperience || 0} />
            </div>
            <div className="mb-6">
                <label for="rexperience" className="block mb-2 text-sm font-medium text-gray-900">Relevant Experience</label>
                <input type="number" name="relevantExperience" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" onChange={handleChange} value={inputs.relevantExperience || 0} />
            </div>
            <div className="mb-6">
                <label for="javascript" className="block mb-2 text-sm font-medium text-gray-900">Proficiency in JavaScript</label>
                <input type="number" name="javascript" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" max={5} min={1} onChange={handleChange} value={inputs.javascript || 0} />
            </div>
            <div className="mb-6">
                <label for="react" className="block mb-2 text-sm font-medium text-gray-900">Proficiency in ReactJS</label>
                <input type="number" name="react" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" max={5} min={1} onChange={handleChange} value={inputs.react || 0} />
            </div>
            <div className="mb-6">
                <label for="node" className="block mb-2 text-sm font-medium text-gray-900">Proficiency in NodeJS</label>
                <input type="number" name="node" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" max={5} min={1} onChange={handleChange} value={inputs.node || 0} />
            </div>
            <div className="mb-6">
                <label for="mongodb" className="block mb-2 text-sm font-medium text-gray-900">Proficiency in MongoDB</label>
                <input type="number" name="mongodb" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" max={5} min={1} onChange={handleChange} value={inputs.mongodb || 0} />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center" >Update</button>
            <button type="reset" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center ml-2" onClick={cancelForm}>Cancel</button>
        </form>
    </div>
)
}

export default EditEmployee