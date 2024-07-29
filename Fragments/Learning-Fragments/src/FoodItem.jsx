import React from "react";
import Item from "./Individualitem";
import { useState } from "react";
const FoodItem = ({ items }) => {
  let [Activeitems, setActiveItems] = useState([]);
  const onByButton = (item, event) => {
    let NewItems = [...Activeitems, item];
    setActiveItems(NewItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            FoodItem={item}
            baught={Activeitems.includes(item)}
            handleByButtonClick={(event) => onByButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItem;
