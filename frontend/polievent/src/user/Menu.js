import './Menu.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoutButton } from '../admin/LogoutButton';
import Cookies from 'js-cookie';
const Menu = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const location = useLocation();
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
          return () => clearInterval(timer);
      }, []);
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return (
        <nav className="left-menu">
        <span>Witaj: {Cookies.get('userLogin')}</span>
        <span>{formattedTime}</span>
        <li className={location.pathname === '/homepage' ? 'active' : ''}>
                    <Link to="/homepage"> <img src="/custom.house.png" alt="Opis zdjęcia 1" /> Strona główna</Link>
                </li>
          <li className={location.pathname === '/shedule' ? 'active' : ''}>
                    <Link to="/shedule"> <img src="/calendar.png" alt="Opis zdjęcia 1" /> Plan zajęć</Link>
                </li>
          <li className={location.pathname === '/last' ? 'active' : ''}>
            <Link to="/last"> <img src="/custom.house.png" alt="Opis zdjęcia 1" /> Ostatnio dodany post</Link>
          </li>
          <div className="profile-section">
          <li className={location.pathname === '/userProfile' ? 'active' : ''}>
                        <Link to="/userProfile"> <img src="/person.png" alt="Opis zdjęcia 1" /> Profil</Link>
                    </li>
          <li>
            <LogoutButton />
          </li>
                            </div>
      </nav>
      );
};
export default Menu;