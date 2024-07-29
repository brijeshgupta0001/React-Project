import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store, counter: newStore.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { ...store, counter: newStore.counter - 1 };
  } else if (action.type === "ADD_NUMBER") {
    newStore = {
      ...store,
      counter: newStore.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUBTRACT_NUMBER") {
    newStore = {
      ...store,
      counter: newStore.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    newStore = { ...store, privacy: !newStore.privacy };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
