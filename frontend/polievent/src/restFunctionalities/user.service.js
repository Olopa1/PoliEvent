import axios from "axios";
const APIR_URL = "http://localhost:8080";

class UserService{
    saveUser(user){
        return axios.post(APIR_URL + "/saveUser",user);
    }
    async fetchUserLogin(email,password){
        const address = `${APIR_URL}/fetchUserLogin?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
        return await axios.get(address,{timeout: 10000});
    }
}

export default new UserService