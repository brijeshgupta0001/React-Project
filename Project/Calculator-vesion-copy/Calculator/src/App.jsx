import "./App.css";
import styles from "./App.module.css";
import Display from "./Componants/Display";
import ButtonContainer from "./Componants/ButtonContainer";
import { useState } from "react";
function App() {
  const [Calval, setCalVal] = useState("54");
  const addvalue = (ButtonText) => {
    if (ButtonText === "C") {
      setCalVal("");
    } else if (ButtonText === "=") {
      let result = eval(Calval);
      setCalVal(result);
    } else {
      let nextNumber = ButtonText;
      setCalVal(Calval + nextNumber);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayCalVal={Calval} />
        <ButtonContainer onButtonClick={(ButtonText) => addvalue(ButtonText)} />
      </div>
    </>
  );
}

export default App;
