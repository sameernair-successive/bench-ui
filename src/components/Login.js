import React from 'react'
import { RiGoogleLine } from "react-icons/ri";
import { GoogleLogin } from 'react-google-login';

const Login = () => {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className='bg-gradient-to-r from-indigo-500 w-5/6 flex justify-center items-center text-center'>
      <div className='h-52 bg-white w-2/5 border rounded-xl drop-shadow-xl'>
        <div className='py-4 text-3xl font-light'>
          Welcome
        </div>
        <div className='font-light text-sm text-gray-600'>
          Sign in to your account
        </div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='py-4 bg-sky-400 w-5/6 mx-auto my-5 rounded-xl cursor-pointer hover:bg-sky-500'>
                <span className='flex font-medium text-gray-700 justify-center'>
                  <div className='my-1 px-2'>
                    <RiGoogleLine />
                  </div>
                  Google
                </span>
              </button>)}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
      </div>
    </div>
  )
}

export default Login