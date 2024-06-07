import axios from "axios";
const APIR_URL = "http://localhost:8080";
class PostService{
    savePost(post){
        return axios.post(APIR_URL + "/savePost",post);
    }
    getVerifiedPosts(){
        return axios.get(APIR_URL + "/getVerifiedPost");
    }
    getNoVerifiedPosts()
    {
        return axios.get(APIR_URL + "/getNoVerifiedPost")
    }
    addInterestedUserToPost(postId, userId) {
        console.log(`Sending request to add INTRESTED userId ${userId} to postId ${postId}`);
        return axios.put(APIR_URL +"/addInterestedUsers",{ postId, userId});
    }
    addMaybeUserToPost(postId, userId) {
        console.log(`Sending request to add MAYBE userId ${userId} to postId ${postId}`);
        return axios.put(APIR_URL +"/addMaybeUsers",{ postId, userId});
    }
    addNotIntrestedUserToPost(postId, userId) {
        console.log(`Sending request to add NOT INTRESTED userId ${userId} to postId ${postId}`);
        return axios.put(APIR_URL +"/addNotIntrestedUsers", { postId, userId});
    }
    deletedIntrestedUserToPost(postId, userId) {
        console.log(`Sending request to delete INTRESTED userId ${userId} to postId ${postId}`);
        return axios.delete(APIR_URL +"/deleteInterestedUsers", {data: { postId, userId }});
    }
    deletedMaybeUserToPost(postId, userId) {
        console.log(`Sending request to delete MAYBE INTRESTED userId ${userId} to postId ${postId}`);
        return axios.delete(APIR_URL +"/deleteMaybeUsers", { data: { postId, userId }});
    }
    deletedNotIntrestedUserToPost(postId, userId) {
        console.log(`Sending request to delete INTRESTED userId ${userId} to postId ${postId}`);
        return axios.delete(APIR_URL +"/deleteNotIntrestedUsers", {data: { postId, userId }});
    }
}
export default new PostService