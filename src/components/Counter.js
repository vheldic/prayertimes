import "./Counter.css";

function Counter() {
  const currentdate = new Date();
  const duration =
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  return <div className="counter">{duration}</div>;
}

export default Counter;
