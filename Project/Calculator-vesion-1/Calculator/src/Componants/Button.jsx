import styles from "./Button.module.css";
const Button = ({ buttons }) => {
  return (
    <>
      {buttons.map((item) => (
        <button key={item} className={styles.button}>
          {item}
        </button>
      ))}
    </>
  );
};
export default Button;
