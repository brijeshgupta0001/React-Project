import "./App.css";
import styles from "./App.module.css";
import Display from "./Componants/Display";
import ButtonContainer from "./Componants/ButtonContainer";
function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer />
      </div>
    </>
  );
}

export default App;
