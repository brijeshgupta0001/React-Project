import styles from "./Button.module.css";
const Button = ({ buttons, onClick }) => {
  return (
    <>
      {buttons.map((item) => (
        <button
          key={item}
          className={styles.button}
          onClick={() => onClick(item)}
        >
          {item}
        </button>
      ))}
    </>
  );
};
export default Button;
