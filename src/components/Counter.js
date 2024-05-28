import { useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCounter((prev) => prev = new Date());
    }, 1000);
  }, []);

  function formatTime() {
    const hours = counter.getHours();
    const minutes = counter.getMinutes();
    const seconds = counter.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  }

  return <div className="counter">{formatTime()}</div>;
}

export default Counter;
