import styles from "./FoodInput.module.css";
const FoodInput = ({ handleonKeyDown }) => {
  return (
    <>
      <input
        type="text"
        className={styles.foodInput}
        placeholder="Enter Food Item Here"
        onKeyDown={handleonKeyDown}
      ></input>
    </>
  );
};
export default FoodInput;
