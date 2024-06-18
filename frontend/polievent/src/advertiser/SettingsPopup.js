import React, { useState, useEffect } from 'react';
import { Alert, Container, FormLabel, Form, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import '../admin/Login.css';
import './SettingsPopup.css'
import userService from '../restFunctionalities/user.service';

const SettingsPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    login: "",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    userStatus: "Advertiser",
    password: "",
    dateOfBirth: ""
  });
  const [secondPassword, setSecondPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [invalidCharacters, setInvalidCharacters] = useState(false);
  const [fieldsAreBlank, setFieldsAreBlank] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(-1);

  useEffect(() => {
    const id = Cookies.get('userID');
    const userStatus = Cookies.get('userStatus');

    if (userStatus) {
      const userStatusUpper = userStatus.toUpperCase();
      setCurrentUserId(id);

      if (id) {
        if (userStatusUpper.match('USER')) {
          window.location.href = '/userdashboard';
        } else if (userStatusUpper.match('ADMIN')) {
          window.location.href = '/admin';
        }
      } else {
        window.location.href = '/';
      }
    }

    setCurrentUserId(id);
    userService.getUserById(id)
      .then(res => {
        const advertiser = res.data;
        setFormData({
          login: advertiser.login,
          firstName: advertiser.firstName,
          lastName: advertiser.lastName,
          companyName: advertiser.companyName,
          email: advertiser.email,
          userStatus: advertiser.userStatus,
          password: advertiser.password,
          dateOfBirth: advertiser.dateOfBirth
        });
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    if (name === 'login') {
      const invalidCharactersPattern = /[\^#%&*$:<>\?\/\{\|\}]/;
      setInvalidCharacters(invalidCharactersPattern.test(value))
    }
  }
  
  const handlePasswordChange = (e) => {
    setFormData(prevData => ({ ...prevData, password: e.target.value }));
  };

  const handleConfirmPasswordChange = (e) => {
    setSecondPassword(e.target.value);
  };

  const checkForPasswordIntegrity = () => formData.password === secondPassword;

  const checkForBlankFields = () => {
    const { companyName, dateOfBirth, email, password, firstName, lastName } = formData;
    const isBlank = !companyName || !dateOfBirth || !email || !password || !firstName || !lastName;
    setFieldsAreBlank(isBlank);
    return !isBlank;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      setIsSuccess(false);
      setMsg("Hasło musi zawierać co najmniej 8 znaków, w tym jedną cyfrę, jedną małą literę i jedną dużą literę");
    } else if (checkForPasswordIntegrity() && checkForBlankFields()) {
      userService.updateuser(formData,currentUserId)
        .then(res => {
          setIsSuccess(true);
          setMsg("Dane reklamodawcy zostały zaktualizowane");
          Cookies.set('userLogin', formData.login, { expires: 7 });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setIsSuccess(false);
      setSecondPassword("");
      setMsg(fieldsAreBlank ? "Nie wpisano wszystkich informacji" : "Podano dwa różne hasła");
    }
  };

  return (
    <div className='popup'>
      <div className='popup-longform'>
      <div className='RegisterBorder'>
        <Container className='justify-content-center'>
          <p className='text1'>Edycja profilu reklamodawcy</p>
          {msg && <Alert variant={isSuccess ? 'success' : 'danger'}>{msg}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className='textLabel'>Imię:</Form.Label>
              <Form.Control type='text' placeholder='Podaj imię' name="firstName" onChange={handleChange} value={formData.firstName} />
            </Form.Group>
            <Form.Group>
              <FormLabel className='textLabel'>Nazwisko:</FormLabel>
              <Form.Control type='text' placeholder='Podaj nazwisko' name="lastName" onChange={handleChange} value={formData.lastName} />
            </Form.Group>
            <Form.Group>
              <FormLabel className='textLabel'>Nazwa użytkownika:</FormLabel>
              <Form.Control type='text' placeholder='Podaj nazwę użytkownika' name="login" onChange={handleChange} value={formData.login} />
              {invalidCharacters && <Alert variant='danger'>W loginie znajduje się zakazany znak</Alert>}
            </Form.Group>
            <Form.Group>
              <FormLabel className='textLabel'>Nazwa firmy:</FormLabel>
              <Form.Control type='text' placeholder='Podaj nazwę firmy' name="companyName" onChange={handleChange} value={formData.companyName} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='textLabel'>Email:</Form.Label>
              <Form.Control type='email' placeholder='Podaj email' name="email" onChange={handleChange} value={formData.email} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='textLabel'>Data urodzenia:</Form.Label>
              <Form.Control type='date' name="dateOfBirth" onChange={handleChange} value={formData.dateOfBirth} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='textLabel'>Hasło:</Form.Label>
              <Form.Control type='password' name="password" onChange={handlePasswordChange} value={formData.password} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='textLabel'>Powtórz hasło:</Form.Label>
              <Form.Control type='password' onChange={handleConfirmPasswordChange} value={secondPassword} />
            </Form.Group>
            <br />
            <Button disabled={invalidCharacters} variant='primary' type='submit'>
              Zmień dane
            </Button>
            <Button variant='secondary' onClick={onClose} style={{ marginLeft: '10px' }}>
              Anuluj
            </Button>
          </Form>
        </Container>
      </div>
    </div>
    </div>
  );
};

export default SettingsPopup;
