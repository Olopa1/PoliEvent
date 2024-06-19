import React from 'react';
import './HeaderSection.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HeaderSection = ({ eventTitle, onEdit, onAddPost, onDelete }) => {
  return (
    <div className="header-section">
      <h1>{eventTitle}</h1>
      <div className="buttons">
        <Link to={`/advertiserdashboard`}>
          <Button variant="primary">Wróć</Button>
        </Link>
        <Button onClick={onEdit}>Edytuj wydarzenie</Button>
        <Button onClick={onAddPost}>Dodaj post</Button>
        <Button onClick={onDelete}>Usuń wydarzenie</Button>
      </div>
    </div>
  );
};

export default HeaderSection;
