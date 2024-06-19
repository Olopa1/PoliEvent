import './LastPost.css';
import React, { useEffect } from 'react';
import Menu from './Menu'
import Cookies from 'js-cookie';
import Post from './PostonMainPage';
import { useState } from 'react';
import postService from '../restFunctionalities/post.service';
const LastPost = () => {
const [posts, setPosts] = useState([]);
function getVerifiedPost() {
  postService.getVerifiedPosts().then((res) => {
    if (Array.isArray(res)) {
        setPosts([]);
    } else {
      setPosts(res.data || []);
    }
  }).catch((error) => {
    console.log(error);
  });
}
useEffect(() => {
  getVerifiedPost();
}, []);
console.log(posts);
const index = posts.length;
const one = posts.at(index - 1);
console.log(one);
  return (
    <div className="main-page">
        <Menu/>
    <div className="content">
        <Post postid={one.id}title={one.title} desc={one.description} street={one.street} company={one.company} interestedPeople={one.intrestedPeople} maxPeople={one.maxPeople} dateEvent={one.dateEvent} datePosted={one.datePosted} interestedUsers={one.interestedUsers} MaybeUsers={one.maybeInterestedUsers} NotUsers={one.notInterestedUsers} timeEvent={one.timeEvent}/>
    </div>
  </div>
  );
};

export default LastPost;
