import { useState, useEffect } from "react";
import "./Locations.css";
import { getLocations } from "../api/getData.js";

function Locations({ showLocations, setShowLocations, setLocation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then((res) => {
      setLocations(res);
    });
    console.log(locations);
  }, [locations]);

  if (!showLocations) return null;
  return (
    <div className="locations-fullscreen">
      <div className="location-list">
        <p className="close-btn" onClick={() => setShowLocations(false)}>&times;</p>
        <div className="locations">
          {locations.map((name, index) => (
            <h1
              key={index}
              onClick={() => {
                console.log("Location change -> ", locations[index]);
                setLocation(index + 1);
                setShowLocations(false);
              }}
            >
              {name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Locations;