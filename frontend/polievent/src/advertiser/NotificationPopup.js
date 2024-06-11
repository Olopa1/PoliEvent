import React from 'react';

const NotificationPopup = ({ notifications, onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <ul>
        {notifications.map(notification => (
          <>
          <li key={1}>"Anna zapisał się na twoje wydarzenie!"</li>
          <li key={2}>"Robert jest zainteresowany twoim wydarzeniem!"</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPopup;
