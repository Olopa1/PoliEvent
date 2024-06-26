import React, { useState } from 'react';
import './EventFormPopup.css'

const AddPostPopup = ({ onClose, onSave }) => {
  const [postData, setPostData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(postData);
  };

  return (
    <div className="advertiser-popup">
      <div className="advertiser-popup-inner">
        <h3>Dodaj nowy post</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Tytuł:</label>
            <input type="text" name="title" value={postData.title} onChange={handleChange} required />
          </div>
          <div>
            <label>Opis:</label>
            <br></br>
            <textarea name="description" value={postData.description} onChange={handleChange} required />
          </div>
          <button type="submit">Dodaj post</button>
          <button type="button" onClick={onClose}>Anuluj</button>
        </form>
      </div>
    </div>
  );
};

export default AddPostPopup;
