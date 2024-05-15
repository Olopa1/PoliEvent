import React, { useState } from 'react';
import userService from '../restFunctionalities/user.service';
const RegisterForm = function(){
    const [user,setUser] = useState({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      userStatus: "Status",
      password: "",
      dateOfBirth: ""
    });
    const [msg,setMsg] = useState("");
  
    const handleChangeFirstName = (e)=>{
      const value = e.target.value;
      setUser(prevUser=>({...prevUser, firstName: value}));
    }
    
    const handleChangeLastName = (e)=>{
      const value = e.target.value;
      setUser(prevUser=>({...prevUser, lastName: value}));
    }
    
    const handleChangeEmail = (e)=>{
      const value = e.target.value;
      setUser(prevUser=>({...prevUser, email: value}));
    }
  
    const handleChangeDateOfBirth = (e)=>{
      const value = e.target.value;
      setUser(prevUser=>({...prevUser, dateOfBirth: value}));
    }
  
    const handleChangePassword = (e)=>{
      const value = e.target.value;
      setUser(prevUser=>({...prevUser, password: value}));
    }
  
    const RegisterUser = (e)=>{
      e.preventDefault();
      console.log(user);
      userService.saveUser(user).then((res)=>{
        console.log("User added succesfully");
        setMsg("Used Added Succesfully");
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          dateOfBirth: "",
          password: "",
        })
      }).catch((error)=>{
        console.log(error);
        setMsg("Something went wrong check console for information");
      });
  
    }
  
    return(
      <div>
      {msg && <p>{msg}</p>}
      <form>
          <label for='firstName'>Imię:</label>
          <input type='text' id='firstName' onChange={(e)=>handleChangeFirstName(e)} value={user.firstName}/>
          <br></br>
          <label for='lastName'>Nazwisko:</label>
          <input type='text' id='lastName' onChange={(e)=>handleChangeLastName(e)} value={user.lastName}/>
          <br></br>
          <label for='email'>Email:</label>
          <input type='email' id='email'onChange={(e)=>handleChangeEmail(e)} value={user.email}/>
          <br></br>
          <label for='dateOfBirth'>Data urodzenia</label>
          <input type='date' id='dateOfBirth'onChange={(e)=>handleChangeDateOfBirth(e)} value={user.dateOfBirth}/>
          <br></br>
          <label for='password'>Hasło</label>
          <input type='password' id='password'onChange={(e)=>handleChangePassword(e)} value={user.password}/>
          <br></br>
          <label for='confirmPassword'>Powtórz hasło</label>
          <input type='password' id='confirmPassword'/>
          <br></br>
          <button type='submit' onClick={(e)=>RegisterUser(e)}>Submit</button> 
        </form>
      </div>
    );
  }

export default RegisterForm;