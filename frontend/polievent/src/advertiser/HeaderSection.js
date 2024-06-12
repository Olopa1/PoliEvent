import React from 'react';
import './HeaderSection.css'

const HeaderSection = ({ eventTitle, onEdit, onAddPost, onDelete }) => {
  return (
    <div className="header-section">
      <h1>{eventTitle}</h1>
      <button onClick={onEdit}>Edit Event</button>
      <button onClick={onAddPost}>Add Post</button>
      <button onClick={onDelete}>Delete Event</button>
    </div>
  );
};

export default HeaderSection;
