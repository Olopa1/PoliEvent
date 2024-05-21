import React, { useState } from 'react';
import userService from '../restFunctionalities/user.service';
import { Alert, Col, Container, FormLabel, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
const RegisterForm = function(){
    const [user,setUser] = useState({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      userStatus: "User",
      password: "",
      dateOfBirth: ""
    });
    const [secondPassword,setPassword] = useState("");
    const [msg,setMsg] = useState("");
    const [isSuccess,setIsSuccess] = useState(true);

    const handleChangeCompanyName = (e)=>{
      const value = e.target.value;
      setUser(prevUser=>({...prevUser, companyName: value}));
    }

    const handleChangeUserState = (e)=>{
      const value = e.target.value;
      if(value === "User"){
        setUser(prevUser=>({...prevUser, companyName: ""}));
      }
        setUser(prevUser=>({...prevUser, userStatus: value}));
    }

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
    
    const handleChangeConfirmPassword = (e)=>{
      const value = e.target.value;
      setPassword(value);
      console.log(value);
    }

    function checkForPasswordIntegrity(){
      if(user.password === secondPassword){
        return true;
      }
      
      return false;
    }

    const RegisterUser = (e)=>{
      e.preventDefault();
      console.log(user);
      setIsSuccess(true);
      if(checkForPasswordIntegrity()){
      userService.saveUser(user).then((res)=>{
          console.log("User added succesfully");
          setMsg("Pomyślnie zarejestrowano");
          setUser({
            firstName: "",
            lastName: "",
            companyName: "",
            email: "",
            userStatus: "User",
            password: "",
            dateOfBirth: ""
          })
          setPassword("");
      }).catch((error)=>{
        console.log(error);
        setIsSuccess(false);
        if(error.response.data.message === "Email already taken"){
          setMsg("Email jest zajęty");
        }
        else{
          setMsg("Coś poszło nie tak");
        }
      });
    }
    else{
      setIsSuccess(false);
      setUser({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        userStatus: "User",
        password: "",
        dateOfBirth: ""
      })
      setPassword("");
      setMsg("Podano dwa różne hasła");
    }
  
    }
  
      //{!isSuccess ? setIsSuccess(true) : ''}
    return(
      <Container className='justify-content-center'>
          <p>Rejestracja użytkownika</p>
      {msg && 
      <Alert variant={isSuccess ? 'success' : 'danger'}>{msg}</Alert>}
      <Form>
          <Form.Group>
            <Form.Label>Imię:</Form.Label>
            <Form.Control type='text' placeholder='Podaj imię' onChange={(e)=>handleChangeFirstName(e)} value={user.firstName}/>
            <Form.Text className='text-muted'>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <FormLabel>Nazwisko:</FormLabel>
            <Form.Control type='text' placeholder='Podaj nazwisko' onChange={(e)=>handleChangeLastName(e)} value={user.lastName}/>
            <Form.Text className='text-muted'>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rodzaj użytkownika</Form.Label><br></br>
            <Form.Check inline defaultChecked type='radio' label='Użytkownik' name='userStatus' value={'User'} onClick={(e)=>handleChangeUserState(e)}/>
            <Form.Check inline type='radio' label='Firma' name='userStatus' value={'Company'} onClick={(e)=>handleChangeUserState(e)}/>
          </Form.Group>
          {user.userStatus === 'Company' &&
            <Form.Group>
            <FormLabel>Nazwa firmy:</FormLabel>
            <Form.Control type='text' placeholder='Podaj nazwę firmy' onChange={(e)=>handleChangeCompanyName(e)} value={user.companyName}/>
            <Form.Text className='text-muted'>
            </Form.Text>
          </Form.Group>}
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' placeholder='Podaj email' onChange={(e)=>handleChangeEmail(e)} value={user.email}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Data urodzenia:</Form.Label>
            <Form.Control type='date' onChange={(e)=>handleChangeDateOfBirth(e)} value={user.dateOfBirth}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Hasło:</Form.Label>
            <Form.Control type='password' onChange={(e)=>handleChangePassword(e)} value={user.password}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Powtórz hasło:</Form.Label>
            <Form.Control type='password' onChange={(e)=>handleChangeConfirmPassword(e)} value={secondPassword}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <br></br>
          <Button variant='primary' onClick={(e)=>RegisterUser(e)}>
            Zarejestruj
          </Button>
        </Form>
      </Container>
    );
  }

export default RegisterForm;