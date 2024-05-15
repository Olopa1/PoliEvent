import './App.css';
import React, { useState } from 'react';
import userService from './restFunctionalities/user.service';
import RegisterForm from "./user/userFunctions";

function App() {
  return (
    <div>
      <h1>Rejestracja</h1>
      <RegisterForm />
    </div>
  );
}



export default App;
