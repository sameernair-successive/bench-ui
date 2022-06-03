import React, { useEffect } from 'react'
import { gapi } from 'gapi-script';
import Container from './components/Container';
import Login from './components/Login';

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
    <div className='flex max-w-full'>
      <Container />
      <Login />
    </div>
  );
}

export default App;
