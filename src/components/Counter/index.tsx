import { useState } from "react";
import classes from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }


  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}