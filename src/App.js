import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, showText, hideText } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Counter : {counter}</h1>
      <button
        type="button"
        className="btn btn-success mr-2"
        onClick={() => dispatch(increment(5))}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-danger mr-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <button
        type="button"
        className="btn btn-primary  mr-2"
        onClick={() => dispatch(showText())}
      >
        Show
      </button>

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => dispatch(hideText())}
      >
        Hide
      </button>

      {isLogged && <h3 className="mt-5">Hello World</h3>}
    </div>
  );
}

export default App;
