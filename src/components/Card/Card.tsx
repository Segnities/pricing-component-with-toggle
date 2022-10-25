import React from "react";

import styles from "./assets/Card.module.css";

interface Props {
  title: string;
  price: number;
  storageType: string;
  storage: number;
  usersAllowed: number;
  sendUp: number;
  mainProposal?: boolean;
}

function Card(props: Props) {
  return (
    <div
      className={`${styles["card"]} ${
        props.mainProposal ? styles["main-card"] : ""
      }`}
    >
      <p className={styles["card-title"]}>{props.title}</p>
      <p className={styles["card-price"]}>
        <span>$</span>
        {props.price}
      </p>
      <hr />
      <p className={styles["card-storage"]}>
        {props.storage} {props.storageType} Storage
      </p>
      <hr />
      <p className={styles["card-user-allowed"]}>
        {props.usersAllowed} Users Allowed
      </p>
      <hr />
      <p className={styles["card-send-up"]}>Send up to {props.sendUp} GB</p>
      <hr />
      <p className={styles["card-learn-more"]}>
        <button>Learn more</button>
      </p>
    </div>
  );
}

export default Card;
