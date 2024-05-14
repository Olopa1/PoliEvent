import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Rejestracja</h1>
      <RegisterForm />
    </div>
  );
}

function RegisterForm(){

  return(
    <form>
      <label for='firstName'>Imię:</label>
      <input type='text' id='firstName'></input>
      <br></br>
      <label for='lastName'>Nazwisko:</label>
      <input type='text' id='lastName'></input>
      <br></br>
      <label for='email'>Email:</label>
      <input type='email' id='email'></input>
      <br></br>
      <label for='dateOfBirth'>Data urodzenia</label>
      <input type='date' id='dateOfBirth'></input>
      <br></br>
      <label for='password'>Hasło</label>
      <input type='password' id='password'></input>
      <br></br>
      <label for='confirmPassword'>Powtórz hasło</label>
      <input type='password' id='confirmPassword'></input>
      <br></br>
      <input type='submit'></input> 
    </form>
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
