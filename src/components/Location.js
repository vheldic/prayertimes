import "./Location.css";

function Location({ location, date, hijri, setShowLocations }) {
  return (
    <div className="location">
      <div className="city" onClick={() => setShowLocations(true)}>
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="map-marker-alt"
          className="map-marker-alt dark"
          viewBox="0 0 384 512"
          height="32"
          width="32"
        >
          <path
            fill="currentColor"
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
          />
        </svg>
        <h1 className="cityname">{location}</h1>
      </div>
      {
        date !== undefined || hijri !== undefined 
        ? <p className="date">{date + " / " + hijri}</p>
        : <div />
      }
    </div>
  );
}

export default Location;