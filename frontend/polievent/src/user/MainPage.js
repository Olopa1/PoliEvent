import './MainPage.css';
import React from 'react';
import Menu from './Menu'
import GridPosts from './GridPosts';

const MainPage = () => {
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
