import data from "../data/data.json"

export async function getPrayertimes(city_id, dayofyear) {
    const cityData = data.prayerTimes[city_id-1]
    
    return {
        city_name: cityData.city_name,
        date: [
            formatDate(cityData.days[dayofyear-1].date[0]),
            cityData.days[dayofyear-1].date[1]
        ],
        times: cityData.days[dayofyear-1].times,
        prayerNames: getAllPrayerNames()
    }
}

export async function getLocations() {
    return data.locations;
}

function formatDate(str) {
    const monthNum = str.slice(str.indexOf("-") + 1, str.lastIndexOf("-"))
    const monthStr = data.months[monthNum - 1]
    let day = str.slice(str.lastIndexOf("-") + 1, str.length);
    if (day.substring(0, 1) === "0") day = day.substring(1, day.length)
    const year = str.slice(0, str.indexOf("-"));
    const formatedDate = day + ". " + monthStr + " " + year;
    return formatedDate;
}

function getAllPrayerNames() {
    return data.prayerNames;
}