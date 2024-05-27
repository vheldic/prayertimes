import "./Location.css";

function Location({location, date, hijri}) {
  return (
    <div className="location">
      <h1 className="city">{location}</h1>
      {
        date !== undefined || hijri !== undefined 
        ?<p className="date">{date + " / " + hijri}</p>
        :<div/>
      }
    </div>
  );
}

export default Location;