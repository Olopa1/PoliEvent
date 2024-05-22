function Validation(values){
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Pole nie może być pustym"
    }else if(!email_pattern.test(values.email)){
        error.email = "Email nie zgadza"
    }    
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Pole nie może być pustym"
    }else if(!password_pattern.test(values.password)){
        error.password = "Hasło nie zgadza"
    }else {
        error.password = ""
    }
    return error;
}

export default Validation