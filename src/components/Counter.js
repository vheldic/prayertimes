import { useEffect, useState } from "react";
import "./Counter.css";

function Counter({ setCurrentMinute }) {
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
    setCurrentMinute(hours * 60 + minutes);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    function padZero(number) {
      return (number < 10 ? "0" : "") + number;
    }
  }

  return <div className="counter">{formatTime()}</div>;
}

export default Counter;
