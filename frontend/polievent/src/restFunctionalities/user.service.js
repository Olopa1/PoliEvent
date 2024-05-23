import axios from "axios";
const APIR_URL = "http://localhost:8080";

class UserService{
    async saveUser(user){
        return await axios.post(APIR_URL + "/saveUser",user);
    }
    async fetchUserLogin(email,password){
        const param = new URLSearchParams();
        param.append('email', email);
        param.append('password',password);
        return await axios.get(APIR_URL + '/fetchUserLogin', {params})
    }
}

export default new UserService