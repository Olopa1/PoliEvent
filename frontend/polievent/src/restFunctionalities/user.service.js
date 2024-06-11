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
  async saveShedule(shedules){
    return await axios.post(APIR_URL + '/saveShedule',shedules,{
      headers:{'Content-Type' : 'application/json'}
    });
  }
  async deleteShedulesWithId(id){
    return await axios.delete(APIR_URL + '/deleteShedule',{id});
  }
}


export default new UserService