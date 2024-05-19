import "./Location.css";

function Location() {
  const location = "Wien";
  const date = "Mo, 20.05.2024";

  return (
    <div className="location">
      <h1 className="city">{location}</h1>
      <p className="date">{date}</p>
    </div>
  );
}

export default Location;
