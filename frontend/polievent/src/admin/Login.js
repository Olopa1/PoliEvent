import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Validation from './Validation';
import './Login.css';
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
    
    const validationErrors = Validation(user);
    setErrors(validationErrors);
    console.log("Validation Errors: ", validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      console.log("Found validation errors, not submitting form.");
      return;
    }

    try {
      console.log("Attempting to login with: ", user);
      const response = await userService.loginUser(user.email, user.password); 
      console.log("Response: ", response);

      if (response.status === 200) {
        setIsSuccess(true);
        console.log("Login successful, redirecting to /homepage");
        window.location.href = '/homepage';
      }if (response.status === 201) {
        setIsSuccess(true);
        console.log("Login successful, redirecting to /admin");
        window.location.href = '/admin';
      }
        if (response.status === 202) {
          setIsSuccess(true);
          console.log("Login successful, redirecting to /advertiserDashboard");
          window.location.href = '/advertiserDashboard';
      }
      else {
        console.log("Login failed, response status: ", response.status);
        setIsSuccess(false);
        setMsg("Nieprawidłowe dane logowania");
      }
    } catch (error) {
      console.log("Error: ", error);
      setIsSuccess(false);
      if (error.response && error.response.status === 401) {
        setMsg("Nieprawidłowe dane logowania");
      } else if (error.response && error.response.data && error.response.data.message) {
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
      <div className="container">
        <img src="logo-pl_2.jpg" className="logo_pl" alt="logo" />
        <div className="login-container">
          <h2 className="text1">Zaloguj się</h2>
          
          {msg && <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}>{msg}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="email"
                onChange={handleInput}
              />
              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="hasło"
                onChange={handleInput}
              />
              {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Zaloguj
            </button>
            <Link to="/register">
              <button type="button" className="btn btn-secondary btn-block mt-3">
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
