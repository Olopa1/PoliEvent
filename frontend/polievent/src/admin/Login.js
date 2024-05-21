import React from 'react';
import { Helmet } from 'react-helmet';

import './Login.css';

export const Login = () => {
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
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="hasło"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Zaloguj
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
