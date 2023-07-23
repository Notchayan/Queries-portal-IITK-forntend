import React, { useState } from "react";
import styles from "./Buttons.module.css";
import flameIcon from "../../assets/flame-svgrepo-com.svg";
import chartIcon from "../../assets/icons8-chart-32.png";
import rocketIcon from "../../assets/rocket-svgrepo-com.svg";

function Buttons() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null); // If the button is already active, deactivate it
    } else {
      setActiveButton(buttonName); // Otherwise, activate the button
    }
  };

  return (
    <div className={styles.buttons}>
      <button
        onClick={() => handleClick('top')}
        className={`${styles.button} ${activeButton === 'top' ? styles.buttonActive : ''}`}
      >
        <img src={flameIcon} alt="Top" /> Top
      </button>
      <button
        onClick={() => handleClick('rising')}
        className={`${styles.button} ${activeButton === 'rising' ? styles.buttonActive : ''}`}
      >
        <img src={chartIcon} alt="Rising" /> Rising
      </button>
      <button
        onClick={() => handleClick('new')}
        className={`${styles.button} ${activeButton === 'new' ? styles.buttonActive : ''}`}
      >
        <img src={rocketIcon} alt="New" /> New
      </button>
    </div>
  );
}

export default Buttons;
