import React from 'react';
import './HeaderSection.css'

const HeaderSection = ({ eventTitle, onEdit, onAddPost, onDelete }) => {
  return (
    <div className="header-section">
      <h1>{eventTitle}</h1>
      <button onClick={onEdit}>Edytuj wydarzenie</button>
      <button onClick={onAddPost}>Dodaj post</button>
      <button onClick={onDelete}>Usuń wydarzenie</button>
    </div>
  );
};

export default HeaderSection;
