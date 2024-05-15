import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import userService from './user.service';
function App() {
  return (
    <div>
      <h1>Rejestracja</h1>
      <RegisterForm />
    </div>
  );
}

function RegisterForm(){
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
    setUser({firstName: value});
  }
  
  const handleChangeLastName = (e)=>{
    const value = e.target.value;
    setUser({lastNameName: value});
  }
  
  const handleChangeEmail = (e)=>{
    const value = e.target.value;
    setUser({email: value});
  }

  const handleChangeDateOfBirth = (e)=>{
    const value = e.target.value;
    setUser({dateOfBirth: value});
  }

  const handleChangePassword = (e)=>{
    const value = e.target.value;
    setUser({dateOfBirth: value});
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
        <input type='text' id='lastName' onChange={(e)=>handleChangeLastName(e)} value={user.lastName}></input>
        <br></br>
        <label for='email'>Email:</label>
        <input type='email' id='email'onChange={(e)=>handleChangeEmail(e)} value={user.email}></input>
        <br></br>
        <label for='dateOfBirth'>Data urodzenia</label>
        <input type='date' id='dateOfBirth'onChange={(e)=>handleChangeDateOfBirth(e)} value={user.dateOfBirth}></input>
        <br></br>
        <label for='password'>Hasło</label>
        <input type='password' id='password'onChange={(e)=>handleChangePassword(e)} value={user.password}></input>
        <br></br>
        <label for='confirmPassword'>Powtórz hasło</label>
        <input type='password' id='confirmPassword'></input>
        <br></br>
        <input type='submit' onClick={(e)=>RegisterUser(e)}></input> 
      </form>
    </div>
  );
}

/*function MyButton(){
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}*/

export default App;
