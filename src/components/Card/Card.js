import React from "react";
import styles from "./Card.module.css";

const Card = ({ nameList, type, deleteFunc }) => {
  const cards = nameList.map(({ name, Country, State, PhoneNumber }, idx) => (
    <div
      className={styles.cardWrapper}
      key={idx}
      style={{ background: type === "girl" ? "pink" : "green" }}
    >
      <div>Name:{name} </div>
      <div>Country :{Country} </div>
      <div>State :{State} </div>
      <div>Phone Number :{PhoneNumber} </div>
      <div
        className={styles.deleteBtn}
        onClick={(e)=>deleteFunc(e,idx )}
      >
        x
      </div>
    </div>
  ));
  return (
    <div>
      <h1>{cards}</h1>
    </div>
  );
};

export default Card;
