import React from 'react';
import './PostsSection.css'

const PostsSection = ({ posts }) => {
  return (
    <div className="posts-section">
      {posts.map(post => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <div className="button-group">
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsSection;
