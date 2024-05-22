import React from 'react';

const NotificationPopup = ({ notifications, onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPopup;
