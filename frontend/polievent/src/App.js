import './App.css';
import React, { useState } from 'react';
import userService from './restFunctionalities/user.service';
import RegisterForm from "./user/userFunctions";
import Post from './user/PostonMainPage';
import MainPage from './user/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planzajec from './user/Planzajec';
import AdvertiserDashboard from './advertiser/AdvertiserDashboard';
import EventPage from './advertiser/EventPage';
import { Login } from './admin/Login'
import { Verification } from './admin/PostsVerificationInterface'
import { Shedule } from './user/Shedule';
import { ShedulePage } from './user/ShedulePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/admin" element={<Verification/>}/>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/post" element={<Post />} />
        <Route path="shedule" element={<ShedulePage />}/>
        <Route path="/advertiserdashboard" element={<AdvertiserDashboard/>}/>
        <Route path="/event/:eventId" element={<EventPage />} />
        <Route path="/homepage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
