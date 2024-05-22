import axios from "axios";
const APIR_URL = "http://localhost:8080";

class PostService{
    savePost(post){
        return axios.post(APIR_URL + "/savePost",post);
    }
    getUser(){
        return axios.get(APIR_URL + "/getPost");
    }
}

export default new PostService