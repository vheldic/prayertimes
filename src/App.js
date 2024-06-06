import { useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Locations from "./components/Locations.js";
import Main from "./components/Main.js";
import Redirects from "./components/Redirects.js";

function App() {
  const cookies = new Cookies();
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState(getLocation());

  function getLocation() {
    console.log("GET LOCATION", cookies);
    if (!cookies.get("location")) cookies.set("location", 17);
    return cookies.get("location");
  }

  return (
    <div className="App">
      <Locations
        showLocations={showLocations}
        setShowLocations={setShowLocations}
        setLocation={setLocation} 
      />
      <Main location={location} setShowLocations={setShowLocations} />
      <Redirects />
    </div>
  );
}

export default App;