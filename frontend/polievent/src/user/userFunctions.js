import React, { useState } from 'react';
import userService from '../restFunctionalities/user.service';
import { Alert, Container, FormLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
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
    const [secondPassword,setPassword] = useState("");
    const [msg,setMsg] = useState("");
    const [isSuccess,setIsSuccess] = useState(true);
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

    const checkForPasswordIntegrity = ()=>{
      if(user.password === secondPassword){
        return true;
      }
      return false;
    }

    const RegisterUser = (e)=>{
      e.preventDefault();
      console.log(user);
      setIsSuccess(true);
      userService.saveUser(user).then((res)=>{
        if(() => checkForPasswordIntegrity() === true){
          console.log("User added succesfully");
          setMsg("Pomyślnie zarejestrowano");
          setUser({
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: "",
            password: "",
          })
          setPassword("");
        }
        else{
          setMsg("Niepoprawne hasło");
          setIsSuccess(false);
        }
      }).catch((error)=>{
        console.log(error);
        setIsSuccess(false);
        setMsg("Coś poszło nie tak" + error);
      });
  
    }
  
    return(
      <Container className='justify-content-center'>
      {msg && 
      <Alert variant={isSuccess ? 'success' : 'danger'}>{msg}</Alert>}
      {!isSuccess ? setIsSuccess(true) : ''}
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
          <Button variant='primary' onClick={(e)=>RegisterUser(e)}>
            Zarejestruj
          </Button>
        </Form>
        
      </Container>
    );
  }

export default RegisterForm;