import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './PostsVerificationInterface.css';
import postService from '../restFunctionalities/post.service';
import Cookies from 'js-cookie';
import { LogoutButton } from './LogoutButton';
const PostCard = ({ post}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const handleVerifyPost = () => {
    postService.verifyPost(post)
      .then(response => {
        console.log("Post Verified successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error veryfing post:", error);
      });
      window.location.reload();
  };
  const handleDeletePost = () =>
  {
    postService.deletePost(post)
    .then(response => {
      console.log("Post Verified successfully:", response.data);
    })
    .catch(error => {
      console.error("There was an error veryfing post:", error);
    });
    window.location.reload();
  };
  return (
    <div className="post-card">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-3" style={{ fontSize: 30 }}>
              <h5 className="card-title">Nazwa wydarzenia</h5>
              <p className="card-text">{post.title}</p>
            </div>
            <div className="col-md-4 col-sm-12 mb-3" style={{ fontSize: 30 }}>
              <h5 className="card-title">Organizator</h5>
              <p className="card-text">{post.company}</p>
            </div>
            <div className="col-md-4 col-sm-12 mb-3" style={{ fontSize: 30 }}>
              <h5 className="card-title">Data</h5>
              <p className="card-text">{post.dateEvent}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Button className="btn btn-success mr-2" style={{ marginRight: 15 }} onClick={() => handleVerifyPost(post)}>
                Zatwierdź
                </Button>
              <Button className="btn btn-danger mr-2" style={{ marginRight: 15 }} onClick={() => handleDeletePost(post)}>
                Usuń
                </Button>
              <Button className="btn btn-primary mr-2" onClick={toggleExpand}>
                {isExpanded ? 'Zwiń' : 'Rozwiń'}
              </Button>
              {isExpanded && (
                <div className="expanded-content">
                  <hr />
                  <p>{post.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Verification = () => {
  const [posts, setPosts] = useState([]);
  function getNoVerifiedPost() {
    postService.getNoVerifiedPosts().then((res) => {
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
    getNoVerifiedPost();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }} className="header"><b>Posty do weryfikowania</b></h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {posts.map((post, index) => (
            <PostCard key={index} post={post}/>
            ))}
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-1">
            <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Verification;
