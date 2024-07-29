import ClockHeading from "./componants/ClockHeading";
import ClockSlogan from "./componants/ClockSlogan";
import CurrentTime from "./componants/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
