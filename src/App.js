import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import English from "./pages/English";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Pdfs from "./pages/Pdfs";
import Suggestions from "./pages/Suggestions";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/english" element={<English />}>
            <Route path="" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="videos" element={<Videos />} />
            <Route path="pdfs" element={<Pdfs />} />
            <Route path="suggest" element={<Suggestions />} />
            <Route path="donate" element={<Donate />} />
          </Route>
          <Route path="/:any" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
