import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", value: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT", value: 5 });
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREMENT", value: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Incrementby5</button>
        <button onClick={increaseHandler}>Incrementby2</button>
        <button onClick={decrementHandler}>Decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
