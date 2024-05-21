import { AwesomeButton } from "react-awesome-button";
import React from 'react';
import "react-awesome-button/dist/styles.css";
import './OptionPicker.css';
import { useState } from 'react';

const Buttons = () => {
    const [pressedButton, setPressedButton] = useState(null);
    const handleClick = (buttonType) => {
        setPressedButton(buttonType);
    };
  
    return (
      <div>
        <AwesomeButton
            onPressed={() => handleClick('primary')}
            type="primary"
            active={pressedButton === 'primary'}
        >
          Idę
        </AwesomeButton>
        <AwesomeButton
            onPressed={() => handleClick('secondary')}
            type="secondary"
            active={pressedButton === 'secondary'}
        >
          Zainteresowany
        </AwesomeButton>
        <AwesomeButton
            onPressed={() => handleClick('danger')}
          type="danger"
          active={pressedButton === 'danger'}
        >
          Odpuszczam
        </AwesomeButton>
      </div>
    );
  };
    export default Buttons;