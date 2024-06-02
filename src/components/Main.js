import { useState, useEffect } from "react";
import "./Main.css";
import { getPrayertimes } from "../api/getData.js"
import Counter from "./Counter.js";
import Location from "./Location.js";
import PrayerTime from "./PrayerTime.js";

function Main({ location, setShowLocations }) {
  const currentDay = getCurrentDay();
  const [currentMinute, setCurrentMinute] = useState()
  const [data, setData] = useState(null);
  
  useEffect(() => {
    getPrayertimes(location, currentDay).then((res) => {
      setData(res)
    })
  }, [location, currentDay]);

  function getCurrentDay() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
  }

  return (
    <>
      <Counter setCurrentMinute={setCurrentMinute}/>
      <Location 
        location={data?.city_name} 
        date={data?.date[0]} 
        hijri={data?.date[1]} 
        setShowLocations={setShowLocations}
      />
      <div className="prayerTimes">
        {data?.times.map((value, index) => (
          <PrayerTime 
            key={index} 
            name={data.prayerNames[index]} 
            time={value} 
            currentMinute={currentMinute} 
          />
        ))}
      </div>
    </>
  );
}

export default Main;