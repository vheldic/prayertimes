import { useState } from "react";
import "./App.css";
import Locations from "./components/Locations.js";
import Main from "./components/Main.js";
import Redirects from "./components/Redirects.js";

function App() {
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState(17);

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