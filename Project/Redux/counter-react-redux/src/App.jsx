import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componants/Header";
import DisplayCounter from "./componants/DisplayCounter";
import Container from "./componants/container";
import Control from "./componants/Controls";
import PrivacyMessage from "./componants/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <Control />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
