import { AwesomeButton } from "react-awesome-button";
import React from 'react';
import "react-awesome-button/dist/styles.css";
import './OptionPicker.css';
import { useState,useEffect } from 'react';
import postService from '../restFunctionalities/post.service';
import Cookies from 'js-cookie';
const Buttons = ({id,arrUsers,arrMaybeUsers,arrNotUsers}) => {
  const [userId, setUserID] = useState(null);
  const [BOOL_PRIMARY, setState_PRIMARY] = useState(false);
  const [BOOL_SECONDARY, setState_SECONDARY] = useState(false);
  const [BOOL_DANGER, setState_DANGER] = useState(false);
  useEffect(() => {
    const id = Cookies.get('userID');
    if (id) {
      setUserID(id);
    } else {
      window.location.href = '/';
    }
    if (arrUsers.includes(parseInt(id))) {
      setState_PRIMARY(true);
    } else if(arrMaybeUsers.includes(parseInt(id))){
      setState_SECONDARY(true);
    }
    else if(arrNotUsers.includes(parseInt(id)))
    {
      setState_DANGER(true);
    }
  }, []);
    const handleInterestedUser = () => {
    localStorage.setItem('scrollPosition', window.scrollY);
    postService.deletedMaybeUserToPost(id, userId)
      .then(response => {
        console.log("MAYBE User deleted successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error deleting the maybe user:", error);
      });
  
    postService.deletedNotIntrestedUserToPost(id, userId)
      .then(response => {
        console.log("Not interested User deleted successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error deleting the not interested user:", error);
      });

    postService.addInterestedUserToPost(id, userId)
      .then(response => {
        console.log("User added successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error adding the user:", error);
      });
      window.location.reload();
      };
  
  const handleMaybeUser = () => {
    localStorage.setItem('scrollPosition', window.scrollY);
    postService.deletedIntrestedUserToPost(id, userId)
      .then(response => {
        console.log("INTRESTED User deleted successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error deleting the intrested user:", error);
      });
  
    postService.deletedNotIntrestedUserToPost(id, userId)
      .then(response => {
        console.log("Not interested User deleted successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error deleting the not interested user:", error);
      });
  
    postService.addMaybeUserToPost(id, userId)
      .then(response => {
        console.log("User added successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error adding the user:", error);
      });
      window.location.reload();
  };
  const handleNotIntrestedUser = () => {
    localStorage.setItem('scrollPosition', window.scrollY);
    postService.deletedMaybeUserToPost(id, userId)
      .then(response => {
        console.log("MAYBE User deleted successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error deleting the maybe user:", error);
      });
  
    postService.deletedIntrestedUserToPost(id, userId)
      .then(response => {
        console.log("interested User deleted successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error deleting the interested user:", error);
      });
  
    postService.addNotIntrestedUserToPost(id, userId)
      .then(response => {
        console.log("User added successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error adding the user:", error);
      });
      window.location.reload();
  };
    return (
      <div>
        <AwesomeButton
            onPressed={() => handleInterestedUser()}
            type="primary"
            disabled={BOOL_PRIMARY}
        >
          Idę
        </AwesomeButton>
        <AwesomeButton
            onPressed={() => handleMaybeUser()}
            type="secondary"
            disabled={BOOL_SECONDARY}
        >
          Zainteresowany
        </AwesomeButton>
        <AwesomeButton
            onPressed={() =>handleNotIntrestedUser()}
          type="danger"
          disabled={BOOL_DANGER}
          >
          Odpuszczam
        </AwesomeButton>
      </div>
    );
  };
    export default Buttons;