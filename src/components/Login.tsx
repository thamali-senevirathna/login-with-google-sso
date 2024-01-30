import React from 'react';
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {
    const handleResponse = (res: CredentialResponse) => {
       console.log(res);
       
    }

  return (
    <div>
        <h1>Login</h1>
<GoogleLogin onSuccess={handleResponse}/>
    </div>
  )
}

export default Login