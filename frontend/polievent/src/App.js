import './App.css';
import React from 'react';
import {RegisterForm} from "./user/userFunctions";
import Post from './user/PostonMainPage';
import MainPage from './user/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdvertiserDashboard from './advertiser/AdvertiserDashboard';
import EventPage from './advertiser/EventPage';
import { Login } from './admin/Login'
import { Verification } from './admin/PostsVerificationInterface'
import { ShedulePage } from './user/ShedulePage';
import ChangeUserPage from './user/UserChangePage';
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
        <Route path="/userProfile" element={<ChangeUserPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
