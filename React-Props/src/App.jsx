import React, { useEffect, useState } from 'react'
import Greeting from './Greeting'

export default function App() {
  let[name, setName] = useState("Sukuna")
  const[count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count])
  const update = () => {
    setName("TOJI");
  }
  const Inc = () => {
    setCount(count + 1);
  }
  const Dec = () => {
    setCount(count - 1);
  }
  const Zero = () => {
    setCount(0);
  }
  return (
    <div>
      <h1>Welcome to {name}</h1>
      <button onClick={update}>Change name</button>
      <h1>The Count value is {count}</h1>
      <br></br>
      <button onClick={Inc}>Count is {count}</button>
      <button onClick={Dec}>Decrement</button>
      <button onClick={Zero}>Reset</button>
    </div>
  );
}
