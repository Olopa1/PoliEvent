import React from 'react';
import './PostsSection.css'

const PostsSection = ({ posts, onEditPost, onDeletePost }) => {
  return (
    <div className="posts-section">
      {posts.map(post => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.picture} alt="Post" />
          <p>{post.description}</p>
          <div className="button-group">
            <button onClick={() => onEditPost(post.id)}>Edit</button>
            <button onClick={() => onDeletePost(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsSection;
