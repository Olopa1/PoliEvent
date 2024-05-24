import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Validation from './Validation';
import './Login.css';
import axios from 'axios';
import userService from '../restFunctionalities/user.service';

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const handleInput = (event) => {
    setUser(prevUser => ({ ...prevUser, [event.target.name]: event.target.value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate email and password
    const validationErrors = Validation(user);
    setErrors(validationErrors);

    // If there are validation errors, don't proceed with login
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const response = await userService.loginUser(user); // Call loginUser method from UserService
      // Assuming backend returns a success status code (e.g., 200) upon successful login
      if (response.status === 200) {
        // Redirect user to homepage upon successful login
        window.location.href = '/homepage';
      } else {
        // Handle other cases (e.g., display error message)
      }
    } catch (error) {
      // Handle error (e.g., display error message)
      setIsSuccess(false);
      if (error.response && error.response.data.message) {
        setMsg(error.response.data.message);
      } else {
        setMsg("Coś poszło nie tak");
      }
    }
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
          
          <form action=""  onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="email"
                className="form-control"
                placeholder="email"
                onChange={handleInput}
              />
              <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="hasło"
                onChange={handleInput}
              />
              <span>{errors.password && <span className='text-danger ' >{errors.password}</span>}</span>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={() => userLogin()}>
              Zaloguj
            </button>
            </Link>
            <Link to="/register">
            <button type="submit" className="btn  btn-primary btn-block mt-3" >
              Zarejestruj się
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
