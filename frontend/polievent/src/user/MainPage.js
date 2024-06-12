import './MainPage.css';
import React, { useEffect } from 'react';
import Menu from './Menu'
import GridPosts from './GridPosts';
import Cookies from 'js-cookie';

const MainPage = () => {
  useEffect(() => {
    const id = Cookies.get('userID');
    const userStatus=Cookies.get('userStatus').toUpperCase();
    if (id) {
      if(userStatus.match('ADVERTISER'))
        window.location.href='/advertiserdashboard'
      if(userStatus.match('ADMIN'))
        window.location.href='/admin'
    } else {
      window.location.href = '/';
    }
  }, []);
  return (
    <div className="main-page">
    <Menu/>
    <div className="content">
      <GridPosts/>
    </div>
  </div>
  );
};

export default MainPage;
