const fs = require("fs");
const API_URL = {
    VAKTIJA: "https://api.vaktija.ba/vaktija/v1",
    IZ: "https://www.islamiccentre.at/goe/api/v1",
};
const YEAR = 2024;
const MONTH_LENGTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const HIJRI_BOS = [
    "muharrem",
    "safer",
    "rebi'u-l-evvel",
    "rebi'u-l-ahir",
    "džumade-l-ula",
    "džumade-l-uhra",
    "redžeb",
    "ša'ban",
    "ramazan",
    "ševval",
    "zu-l-ka'de",
    "zu-l-hidždže",
];
const HIJRI_GER = [
    "Muharram",
    "Safar",
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    "Jumada al-Ula",
    "Jumada al-Alkhirah",
    "Rajab",
    "Sha’ban",
    "Ramadhan",
    "Shawwal",
    "Thul-Qi’dah",
    "Thul-Hijjah",
];

async function fillData() {
    // Load JSON-File
    const data = fs.readFileSync("./src/data/data.json");
    const jsonData = JSON.parse(data);

    // Generate data for JSON-File
    const prayerTimesAllLocations = [];
    for (let indexLocation = 0; indexLocation < jsonData.locations.length; indexLocation++) {
        const prayerTimesLocation = {
            city_id: indexLocation + 1,
            city_name: jsonData.locations[indexLocation],
            days: [],
        };

        // Get times
        const location = jsonData.locations_slug[indexLocation];
        console.log("Loading data for " + location + "...");
        
        const fetchIZ = await fetchData(API_URL.IZ + "/town/times/" + location).catch((e) => {
            throw new Error("Error while fetching API from IZ Wien - " + e);
        });

        for (let indexMonth = 1; indexMonth <= 1; indexMonth++) {
            for (let indexDay = 1; indexDay <= 3; indexDay++) {
                // Get date
                const fetchVaktija = await fetchData(API_URL.VAKTIJA + "/77/" + YEAR + "/" + indexMonth + "/" + indexDay).catch((e) => {
                    throw new Error("Error while fetching API from Vaktija.ba - " + e);
                });

                const year = fetchVaktija.godina;
                const month = formatDate(fetchVaktija.mjesec);
                const day = formatDate(fetchVaktija.dan);
                const hijri = translateHijri(fetchVaktija.datum[0]);

                const prayerTimesDay = {
                    date: [year + "-" + month + "-" + day, hijri],
                    times: ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
                };

                // Set times
                let dayofyear = 0;
                for (let i = 0; i < indexMonth - 1; i++) {
                    dayofyear += MONTH_LENGTH[i];
                }
                dayofyear += indexDay;

                prayerTimesDay.times[0] = fetchIZ[dayofyear - 1].fajr.slice(0, 5);
                prayerTimesDay.times[1] = fetchIZ[dayofyear - 1].sunrise.slice(0, 5);
                prayerTimesDay.times[2] = fetchIZ[dayofyear - 1].dhuhr.slice(0, 5);
                prayerTimesDay.times[3] = fetchIZ[dayofyear - 1].asr.slice(0, 5);
                prayerTimesDay.times[4] = fetchIZ[dayofyear - 1].maghrib.slice(0, 5);
                prayerTimesDay.times[5] = fetchIZ[dayofyear - 1].isha.slice(0, 5);

                // Add times for a day of a location
                prayerTimesLocation.days[dayofyear - 1] = prayerTimesDay;
            }
        }
        // Add times of all days of a location
        prayerTimesAllLocations[indexLocation] = prayerTimesLocation;
    }
    jsonData.prayerTimes = prayerTimesAllLocations;

    // Insert into JSON-File
    const jsonString = JSON.stringify(jsonData);

    fs.writeFileSync("./src/data/data.json", jsonString, "utf-8", (err) => {
        if (err) throw err;
        console.log("Data added to file");
    });

    console.log("Finished")
}

async function fetchData(url) {
    const data = await fetch(url).catch((e) => {
        throw Error(e);
    });
    return data.json();
}

function formatDate(string) {
    return ("0" + string).slice(-2);
}

function translateHijri(hijri) {
    const month = hijri.substring(hijri.indexOf(".") + 2, hijri.length - 5);

    for (let i = 0; i < HIJRI_BOS.length; i++)
        if (month === HIJRI_BOS[i]) return hijri.replace(month, HIJRI_GER[i]);

    return hijri;
}

fillData();