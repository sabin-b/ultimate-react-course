import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <main className="main">
      <div className="container">
        <DateCounter />
      </div>
    </main>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // * step functions
  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  // * count functions
  function handleCountIncrease() {
    setCount((count) => count + step);
  }

  function handleCountDecrease() {
    setCount((count) => count - step);
  }

  function handleInputVal(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      {/* step area */}
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={handleStep}
        />
        <span>{step}</span>
      </div>
      {/* step area */}
      {/* count area */}
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <input type="text" value={count} onChange={handleInputVal} />
        <button onClick={handleCountIncrease}>+</button>
      </div>
      {/* count area */}
      <br />
      <DateMessage count={count} />
      {step > 1 && count > 0 ? (
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}

function DateMessage({ count }) {
  let date = new Date();
  date.setDate(date.getDate() + count);

  if (count === 0) {
    return <p>Today is {date.toDateString()}</p>;
  } else if (count > 0) {
    return (
      <p>
        After {count} days from Today {date.toDateString()}
      </p>
    );
  } else {
    return (
      <p>
        Before {Math.abs(count)} days from Today {date.toDateString()}
      </p>
    );
  }
}
