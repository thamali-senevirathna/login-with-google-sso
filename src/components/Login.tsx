import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {
  return (
    <div>
        <h1>Login</h1>
<GoogleLogin onSuccess={}/>
    </div>
  )
}

export default Login