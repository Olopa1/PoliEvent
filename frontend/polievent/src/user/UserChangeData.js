import React, { useState, useEffect } from 'react';
import userService from '../restFunctionalities/user.service';
import { Alert, Col, Container, FormLabel, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import './UserRegister.css';
import '../admin/Login.css';

export const ChangeUserDataForm = function(){
    const [user,setUser] = useState({
        login: "",
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        userStatus: "User",
        password: "",
        dateOfBirth: ""
      });
      const [fieldsAreBlank,setFieldsAreBlank] = useState(true);
      const [secondPassword,setPassword] = useState("");
      const [msg,setMsg] = useState("");
      const [isSuccess,setIsSuccess] = useState(true);
      const [invalidCharacters,setInvalidCharacter] = useState(false);
      const [currentUserId,setCurrentUserId] = useState(-1);
  
      useEffect(() => {
        const id = Cookies.get('userID');
        const userStatus = Cookies.get('userStatus');
        
        if (userStatus) {
          const userStatusUpper = userStatus.toUpperCase();
          setCurrentUserId(id);
          
          if (id) {
            if (userStatusUpper.match('ADVERTISER')) {
              window.location.href = '/advertiserdashboard';
            } else if (userStatusUpper.match('ADMIN')) {
              window.location.href = '/admin';
            }
          } else {
            window.location.href = '/';
          }
        }
        setCurrentUserId(id)
        userService.getUserById(id).then((res)=>{
            console.log(res.data);
            setUser(prevUser=>({...prevUser,login: res.data.login}));
            setUser(prevUser=>({...prevUser,firstName: res.data.firstName}));
            setUser(prevUser=>({...prevUser,lastName: res.data.lastName}));
            setUser(prevUser=>({...prevUser,companyName: res.data.companyName}));
            setUser(prevUser=>({...prevUser,email: res.data.email}));
            setUser(prevUser=>({...prevUser,userStatus: res.data.userStatus}));
            setUser(prevUser=>({...prevUser,password: res.data.password}));
            setUser(prevUser=>({...prevUser,dateOfBirth: res.data.dateOfBirth}));
        }).catch((err)=>{
            console.log(err);
        })
      }, []);



    const handleChangeUserLogin = (e)=>{
      const value = e.target.value;
      setUser(prevUser=>({...prevUser,login: value}));
      const invalidCharactersPattern = /[\^#%&*$:<>\?\/\{\|\}]/;
      if (user.login.match(/[^#%&*:<>?/{|}]+/)) {
          setInvalidCharacter(false);
      } else {
          setInvalidCharacter(true);
      }
    }

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
      console.log(user.firstName);
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

    function checkForBlankFields(){
      if(user.companyName === '' && user.userStatus === 'Company'){
        setFieldsAreBlank(true);
        return false;
      }
      if(user.dateOfBirth === ''){
        setFieldsAreBlank(true);
        return false;
      }
      if(user.email === ''){
        setFieldsAreBlank(true);
        return false;
      }
      if(user.password === ''|| secondPassword === ''){
        setFieldsAreBlank(true);
        return false;
      }
      if(user.firstName === ''){
        setFieldsAreBlank(true);
        return false;
      }
      if(user.lastName === ''){
        setFieldsAreBlank(true);
        return false;
      }
      setFieldsAreBlank(false);
      return true;
    }

    const RegisterUser = (e)=>{
      e.preventDefault();
      setIsSuccess(true);
      const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
      if (!password_pattern.test(user.password)) {
        setIsSuccess(false);
        setMsg("Hasło musi zawierać co najmniej 8 znaków, w tym jedną cyfrę, jedną małą literę i jedną dużą literę");
      }
      else if(checkForPasswordIntegrity() && checkForBlankFields()){
        userService.updateuser(user,currentUserId).then((res)=>{
          console.log(res);
          setIsSuccess(true);
          setMsg("Użytkownik poprawnie zmienony");
        }).catch((err)=>{
          console.log(err);
        })
    }
    else{
      setIsSuccess(false);
      setPassword("");
      if(fieldsAreBlank){
        setMsg("Nie wpisano wszytkich informacji");
        setFieldsAreBlank(!fieldsAreBlank);
      }
      else{
        setMsg("Podano dwa różne hasła");
      }
    }
  
    }
  

  return(
    <div className='RegisterBorder'>
      <Container className='justify-content-center'>
          <p className='text1'>Edycja profilu</p>
      {msg && 
      <Alert variant={isSuccess ? 'success' : 'danger'}>{msg}</Alert>}
      <Form>
          <Form.Group>
            <Form.Label className='textLabel'>Imię:</Form.Label>
            <Form.Control className='' type='text' placeholder='Podaj imię' onChange={(e)=>handleChangeFirstName(e)} value={user.firstName}/>
            <Form.Text className='text-muted'>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <FormLabel className='textLabel'>Nazwisko:</FormLabel>
            <Form.Control type='text' placeholder='Podaj nazwisko' onChange={(e)=>handleChangeLastName(e)} value={user.lastName}/>
            <Form.Text className='text-muted'>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <FormLabel className='textLabel'>Nazwa użytkownika:</FormLabel>
            <Form.Control type='text' placeholder='Podaj nazwę użytkownika' onChange={(e)=>handleChangeUserLogin(e)} value={user.login}/>
            <Form.Text className='text-muted'>
            {invalidCharacters && <Alert variant='danger'>W loginie znajduje się zakazanych znak</Alert>}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label className='textLabel'>Rodzaj użytkownika</Form.Label><br></br>
            <Form.Check inline defaultChecked type='radio' label='Użytkownik' name='userStatus' value={'User'} onClick={(e)=>handleChangeUserState(e)}/>
            <Form.Check inline type='radio' label='Firma' name='userStatus' value={'Company'} onClick={(e)=>handleChangeUserState(e)}/>
          </Form.Group>
          {user.userStatus === 'Company' &&
            <Form.Group>
            <FormLabel className='textLabel'>Nazwa firmy:</FormLabel>
            <Form.Control type='text' placeholder='Podaj nazwę firmy' onChange={(e)=>handleChangeCompanyName(e)} value={user.companyName}/>
            <Form.Text className='text-muted'>
            </Form.Text>
          </Form.Group>}
          <Form.Group>
            <Form.Label className='textLabel'>Email:</Form.Label>
            <Form.Control type='email' placeholder='Podaj email' onChange={(e)=>handleChangeEmail(e)} value={user.email}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label className='textLabel'>Data urodzenia:</Form.Label>
            <Form.Control type='date' onChange={(e)=>handleChangeDateOfBirth(e)} value={user.dateOfBirth}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label className='textLabel'>Hasło:</Form.Label>
            <Form.Control type='password' onChange={(e)=>handleChangePassword(e)} value={user.password}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label className='textLabel'>Powtórz hasło:</Form.Label>
            <Form.Control type='password' onChange={(e)=>handleChangeConfirmPassword(e)} value={secondPassword}/>
            <Form.Text>
            </Form.Text>
          </Form.Group>
          <br></br>
          <Button disabled={invalidCharacters} variant='primary' onClick={(e)=>RegisterUser(e)}>
            Zmień dane
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ChangeUserDataForm;