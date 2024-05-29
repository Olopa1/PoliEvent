import axios from "axios";
const APIR_URL = "http://localhost:8080";

class UserService{
    saveUser(user){
        return axios.post(APIR_URL + "/saveUser",user);
    }
    async loginUser(email, password) {
      return await axios.post(APIR_URL + '/loginUser', { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
}


export default new UserService