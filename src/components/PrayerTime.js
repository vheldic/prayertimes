import "./PrayerTime.css";

function PrayerTime({name, time}) {
  return (
    <div className="prayerTime">
      <h2 className="prayerName">{name}</h2>
      <p className="prayerTimeTime">{time}</p>
      <p className="prayerRemainingTime">in x min</p>
    </div>
  );
}

export default PrayerTime;