import './Menu.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
          return () => clearInterval(timer);
      }, []);
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return (
        <nav className="left-menu">
        <span>{formattedTime}</span>
          <li>
            <a href="#"> <img src="/custom.house.png" alt="Opis zdjęcia 1" /> Strona główna</a>
            </li>
          <li><a href="#"> <img src="/calendar.png" alt="Opis zdjęcia 1" /> Plan zajęć</a></li>
          <li><Link to="/post"> <img src="/heart.png" alt="Opis zdjęcia 1" /> Obserwowane</Link></li>
          <div className="profile-section">
          <li><Link to="/register"> <img src="/person.png" alt="Opis zdjęcia 1" /> Profil</Link></li>
        </div>
      </nav>
      );
};
export default Menu;