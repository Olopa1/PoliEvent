import axios from "axios";
const APIR_URL = "http://localhost:8080";

class UserService{
    saveUser(user){
        return axios.post(APIR_URL + "/saveUser",user);
    }
}

export default new UserService