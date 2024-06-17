import axios from "axios";
import { ApiKey } from "devextreme-react/cjs/map";
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

  async deleteUser(id){
    return await axios.delete(APIR_URL + '/deleteUserById',{params:{id: id}});
  }

  async updateuser(user,id){
    const updatedUser = {...user,id:id};
    console.log(updatedUser);
    return await axios.put(APIR_URL + '/changeUser',updatedUser,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }

  async saveShedule(shedules){
    return await axios.post(APIR_URL + '/saveShedule',shedules,{
      headers:{'Content-Type' : 'application/json'}
    });
  }

  async getUserById(id){
    return await axios.get(APIR_URL + '/getUserById',{params:{id: id}});
  }
  
  async deleteShedulesWithId(id){
    return await axios.delete(APIR_URL + '/deleteShedule',{params: {id}});
  }

  async getInitalDataForShedule(id){
    return await axios.get(APIR_URL + '/readSheduleWithId',{params:{id: id}});
  }
}


export default new UserService