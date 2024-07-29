import React from "react";
import styles from "./Individualitem.module.css";
const Item = ({ FoodItem, baught, handleByButtonClick }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${baught && "active"}`}
    >
      <span className={styles["kg-span"]}>{FoodItem}</span>
      <button
        type="button"
        className={`${styles["alignment"]} btn btn-danger`}
        onClick={handleByButtonClick}
      >
        Delete
      </button>
    </li>
  );
};
export default Item;
