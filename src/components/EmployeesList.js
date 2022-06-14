import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const EmployeesList = () => {

    const [getEmpData, setEmpData] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {

        const response = await fetch("http://localhost:5000/api/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        console.log(data);
        setEmpData(data);
    }

    const deleteEmployee = async (id) => {
        const response = await fetch(`http://localhost:5000/api/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const deletedata = await response.json();
        console.log(deletedata);
        getEmployees();
    }

    return (
        <div className="relative shadow-md rounded-lg mx-20 my-8">

            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Relevant experience
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getEmpData.map((element) => {
                            return (
                                <>
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">{element.firstName} {element.lastName}</th>
                                        <td className="px-6 py-4">{element.employeeId}</td>
                                        <td className="px-6 py-4">{element.email}</td>
                                        <td className="px-6 py-4">{element.relevantExperience}</td>
                                        <td className="px-1 py-4 text-right">
                                            <NavLink to={`/employees/edit/${element._id}`}><button href="#" className="font-medium text-blue-600 hover:underline">Edit</button></NavLink>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <button href="#" className="font-medium text-red-600 hover:underline" onClick={() => deleteEmployee(element._id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeesList