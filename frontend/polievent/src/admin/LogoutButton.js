
import React from "react";
import './Login.css';
import Cookies from 'js-cookie';

export const LogoutButton = () =>{
    function logout(){
        localStorage.clear();
        Cookies.remove('userID');
        Cookies.remove('userStatus');
        
        window.location.href = '/';
    }
    return(
        <>
              <button className="btn btn-danger float-right wyloguj mb-3" onClick={logout}>Wyloguj</button>
        </>
    )
}