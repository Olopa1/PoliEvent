import './App.css';
import React, { useState } from 'react';
import userService from './restFunctionalities/user.service';
import RegisterForm from "./user/userFunctions";
import Post from './user/PostonMainPage';
import MainPage from './user/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planzajec from './user/Planzajec';
import { Login } from './admin/Login'
import { Verification } from './admin/PostsVerificationInterface'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/admin" element={<Verification/>}/>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/post" element={<Post />} />
        <Route path="/homepage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
