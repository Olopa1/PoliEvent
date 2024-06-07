function Validation(values) {
    let errors = {};
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (values.email === "") {
      errors.email = "Pole nie może być pustym";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email nie jest poprawny";
    }
  
    if (values.password === "") {
      errors.password = "Pole nie może być pustym";
    } 

  
    return errors;
  }
  
  export default Validation;
  