import React, { useEffect } from 'react'
import { gapi } from 'gapi-script';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_Id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees/edit/:id" element={<EditEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
