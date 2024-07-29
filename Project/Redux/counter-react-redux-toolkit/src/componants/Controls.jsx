import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
const Control = () => {
  const number = useRef();

  const dispatch = useDispatch();

  const HandleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const HandleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const HandleAdd = () => {
    dispatch(counterActions.Add(number.current.value));

    number.current.value = "";
  };
  const HandleSubtract = (event) => {
    dispatch(counterActions.subtract(number.current.value));

    number.current.value = "";
  };
  const HandlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={HandleIncrement}
        >
          Increase
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={HandleDecrement}
        >
          Decrease
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={HandlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center c control-gap">
        <input
          ref={number}
          type="number"
          placeholder="Enter Number"
          className="number-input"
        />

        <button type="button" className="btn btn-info" onClick={HandleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-info" onClick={HandleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};
export default Control;
