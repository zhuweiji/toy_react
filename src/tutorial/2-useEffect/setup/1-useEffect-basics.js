import React, { useEffect, useState } from "react";

let counter = 0;

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    counter++;
  }, [value]);
  useEffect(() => {
    document.title = `${value}`;
  }, []);
  return (
    <>
      <h1>{value}</h1>
      <h2>{counter}</h2>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  );
};

export default UseEffectBasics;
