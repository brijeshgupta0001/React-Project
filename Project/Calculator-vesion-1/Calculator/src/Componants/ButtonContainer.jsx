import styles from "./ButtonContainer.module.css";
import Button from "./Button";
const ButtonContainer = () => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles["Button-Container"]}>
        <Button buttons={buttons} />
      </div>
    </>
  );
};
export default ButtonContainer;
