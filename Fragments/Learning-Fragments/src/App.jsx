import React from "react";
import FoodItem from "./FoodItem";
import Title from "./Title";
import ErrorMessage from "./ErrorMessage";
import "./App.css";
import Container from "./Container";
import FoodInput from "./FoodInput";
import TextToShow from "./TextToShow";
import { useState } from "react";
function App() {
  let [ListOfHealthyFood, setListOfHealthyFood] = useState([]);

  // const ListOfHealthyFood = [];
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      console.log(`Entered value is : ${newFoodItem}`);
      let newItems = [...ListOfHealthyFood, newFoodItem];
      setListOfHealthyFood(newItems);
    }
  };
  return (
    <>
      <Container>
        <Title />
        <FoodInput handleonKeyDown={onKeyDown} />
        {/* <TextToShow text={textToShow} /> */}
        <FoodItem items={ListOfHealthyFood} />
        <ErrorMessage items={ListOfHealthyFood} />
      </Container>
      <Container>
        <p>
          Above are the list of healthy food that is good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
