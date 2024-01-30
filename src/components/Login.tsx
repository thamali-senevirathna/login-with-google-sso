import React from 'react';
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


const Login = () => {
const navigate = useNavigate();


    const handleResponse = (res: CredentialResponse) => {
       console.log(res);
       navigate("/");
    }

  return (
    <div>
        <h1>Login</h1>
<GoogleLogin onSuccess={handleResponse}/>
    </div>
  )
}

export default Login