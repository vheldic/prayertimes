import "./PrayerTime.css";

function PrayerTime({ name, time, currentMinute, highlight }) {
  function remainingTime() {
    const prayertimeMinutes =
      Number(time.split(":")[0] * 60) + Number(time.split(":")[1]);
    const remainingMinutes = prayertimeMinutes - currentMinute;

    if (remainingMinutes === 0) return "JETZT";

    // To show remaining hours without minutes:
    let unit = `${Math.floor(Math.abs(remainingMinutes) / 60)} std`;
    if (Math.abs(remainingMinutes) < 60)
      unit = `${Math.abs(remainingMinutes)} min`;

    // To show remaining hours with minutes:
    // let unit = "";
    // if (Math.abs(remainingMinutes) < 60) {
    //   unit = `${Math.abs(remainingMinutes)} min`;
    // } else {
    //   let remainingHours = Math.floor(Math.abs(remainingMinutes) / 60);
    //   unit = `${remainingHours} std`;
    //   if (Math.abs(remainingMinutes % 60) !== 0)
    //     unit += ` ${Math.abs(remainingMinutes % 60)} min`;
    // }
    
    if (remainingMinutes < 0) return `vor ${unit}`;
    return `in ${unit}`;
  }

  return (
    <div className="prayerTime">
      <h2 className="prayerName">{name}</h2>
      <p className={`prayerTimeTime ${highlight ? 'prayerTimeTime-highlight' : ''}`}>{time}</p>
      <p className="prayerRemainingTime">{remainingTime()}</p>
    </div>
  );
}

export default PrayerTime;