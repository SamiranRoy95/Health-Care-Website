import React from 'react';
import useAuth from './useAuth';
import "./Login.css"
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle,
       
        handleRegistration,
        handleEmail,
        handlePassword,
        toggleLogin,

        login } = useAuth();
       const location= useLocation();
     const history= useHistory();
     const redirect__uri=location.state?.from || "/";
     const handleGoogleLogin=()=>{
         signInUsingGoogle()
         .then(result=>{
history.push(redirect__uri)
         })
     }


     
    return (
        <div className="login__component">
            

<h3 className="login__title">Please  {login ? "Login" : "Register"}</h3>
<div className="login__form__div">



            <form onSubmit={handleRegistration}>
                
                <label className="login__label">Name:</label>
                <input className="login__input" onBlur={handleEmail} type="text" name="email" />
                
                <label className="login__label">Password:</label>
                <input className="login__input" onBlur={handlePassword} type="text" name="password" />
                
                <input onChange={toggleLogin} type="checkbox" name="checkbox" />
                <label>Already Register?</label>
                <br />
                <br />
                <button className="login__submit__btn" type="submit">{login ? "Login" : "Register"}</button>
            </form>

            <br />
            <br />
            <br />
            <button onClick={handleGoogleLogin}>Sign in with google</button>
            </div>
        </div>
    )
}

export default Login
