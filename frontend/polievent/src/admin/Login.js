import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Login.css';
import userService from '../restFunctionalities/user.service';
export const Login = () => {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const userLogin = ()=>{
    userService.fetchUserLogin(email,password).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const onChangePassword = (e) =>{
    const value = e.target.value;
    setPassword(value);
  }
  const onChangeEmail = (e) =>{
    const value = e.target.value;
    setEmail(value);
  }

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
       
        <link
          href="https://fonts.googleapis.com/css?family=Be Vietnam Pro"
          rel="stylesheet"
        />
      </Helmet>
      <div className="container" >
        <img src="logo-pl_2.jpg" className="logo_pl" alt="logo" />
        <div className="login-container">
        <h2 className="text1">Zaloguj się</h2>
          
          <form>
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="email"
                onChange={(e)=>onChangeEmail(e)}
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="hasło"
                onChange={(e)=>onChangePassword(e)}
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={() => userLogin()}>
              Zaloguj
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
