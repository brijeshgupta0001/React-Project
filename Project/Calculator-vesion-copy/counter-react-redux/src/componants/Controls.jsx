import { useRef } from "react";
import { useDispatch } from "react-redux";

const Control = () => {
  const number = useRef();

  const dispatch = useDispatch();
  const HandleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const HandleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const HandleAdd = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_NUMBER",
      payload: {
        num: number.current.value,
      },
    });
  };
  const HandleSubtract = (event) => {
    event.preventDefault();
    dispatch({
      type: "SUBTRACT_NUMBER",
      payload: {
        num: number.current.value,
      },
    });
  };
  const HandlePrivacyToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
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
