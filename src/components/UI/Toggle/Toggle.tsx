import React from "react";

import styles from "./Toggle.module.css";

interface toggleProps {
  isActive: boolean;
  setIsActive: Function;
}

const Toggle = (props: toggleProps) => {
  return (
    <div
      className={`${styles["switch"]} ${
        props.isActive ? styles["switch-active"] : ""
      }`}
      onClick={() => props.setIsActive(!props.isActive)}
    >
      <span
        className={`${styles["switch-btn"]} ${
          props.isActive ? styles["switch-btn-active"] : ""
        }`}
      ></span>
    </div>
  );
};

export default Toggle;
