import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  return <h2>useEffect cleanup</h2>;
};

export default UseEffectCleanup;
