import './App.css';
import React, { useState } from 'react';
import userService from './restFunctionalities/user.service';
import RegisterForm from "./user/userFunctions";
import Post from './PostonMainPage';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
