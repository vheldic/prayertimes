import { Container, Row, Col } from "react-bootstrap";

import "./Main.css";
import Counter from "./Counter.js";
import Location from "./Location.js";
import PrayerTime from "./PrayerTime.js";

const data = [1, 2, 3, 4, 5, 6];

function Main() {
  return (
    <Container>
      <Counter />
      <Location />
      <Row>
        <Col>
          <div className="prayerTimes">
            {data.map(() => (
              <PrayerTime />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;

// const app = Vue.createApp({
//   data() {
//       return {
//           title: "Prayer times project",
//           locations: [],
//           data: [],
//       }
//   },
//   methods: {
//       async search() {
//           const res = await fetch("https://api.vaktija.ba/vaktija/v1/lokacije")
//               .catch((err) => {
//                   throw Error("Error while fetching data - " + err);
//               });

//           this.data = await res.json();
//           console.log(this.data)

//           console.log(locations)
//       },
//   }
// });
// app.mount("#app")
