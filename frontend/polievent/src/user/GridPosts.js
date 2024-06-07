import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from './PostonMainPage';
import React, { useState, useEffect } from 'react';
import './GridPosts.css';
import postService from '../restFunctionalities/post.service';
function GridPosts() {
      const [posts, setPosts] = useState([]);
      function getPost() {
        postService.getUser().then((res) => {
          console.log('Response from postService.getUser():', res);
          if (Array.isArray(res)) {
            setPosts([]);
          } else {
            setPosts(res.data || []);
          }
          console.log('Posts:', res);
        }).catch((error) => {
          console.log(error);
        });
      }
      useEffect(() => {
        getPost();
      }, []);
      window.onload = function() {
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition !== null) {
          window.scrollTo(0, parseInt(scrollPosition));
          localStorage.removeItem('scrollPosition');
        }
      }
  return (
    <div className="scroll-view">
<Container>
  {posts.map((post, index) => (
    <Row key={index} className="justify-content-center">
      <Col sm={6}>
        <Post postid={post.id}title={post.title} desc={post.description} street={post.street} company={post.company} interestedPeople={post.intrestedPeople} maxPeople={post.maxPeople} dateEvent={post.dateEvent} datePosted={post.datePosted} interestedUsers={post.interestedUsers} MaybeUsers={post.maybeInterestedUsers} NotUsers={post.notInterestedUsers} timeEvent={post.timeEvent}/>
      </Col>
    </Row>
  ))}
</Container>

  </div>
  );
}

export default GridPosts;