function Validation(values) {
    let errors = {};
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      errors.email = "Pole nie może być pustym";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email nie jest poprawny";
    }
  
    if (values.password === "") {
      errors.password = "Pole nie może być pustym";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Hasło musi zawierać co najmniej 8 znaków, w tym jedną cyfrę, jedną małą literę i jedną dużą literę";
    }
  
    return errors;
  }
  
  export default Validation;
  