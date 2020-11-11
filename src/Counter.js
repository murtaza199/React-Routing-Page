import { useState, useMemo } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(0);
  const multiCount = useMemo(() => {
    console.log("mult called");
    return count * 2;
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{countB}</h1>
      <h1>{multiCount}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click Here for Count Update
      </button>
      <br />
      <br />
      <button onClick={() => setCountB(countB + 1)}>
        Click Here for CountB Update
      </button>
      {/* <br />
      <br />
      <button onClick={mult}>multiplier Count</button> */}
    </div>
  );
}
export default Counter;
