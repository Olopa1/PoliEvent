import './App.css';
import React, { useState } from 'react';
import userService from './restFunctionalities/user.service';
import RegisterForm from "./user/userFunctions";
import Post from './user/PostonMainPage';
import MainPage from './user/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planzajec from './user/Planzajec';
import AdvertiserDashboard from './advertiser/AdvertiserDashboard';
import AdvertiserLogin from './advertiser/AdvertiserLogin';
import AdvertiserRegister from './advertiser/AdvertiserRegister';
import EventPage from './advertiser/EventPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/plan" element={<Planzajec />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/post" element={<Post />} />
        <Route path="/advertiserregister" element={<AdvertiserRegister/>}/>
        <Route path="/advertiserlogin" element={<AdvertiserLogin/>}/>
        <Route path="/advertiserdashboard" element={<AdvertiserDashboard/>}/>
        <Route path="/event/:eventId" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
