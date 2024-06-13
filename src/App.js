import logo from "./logo.svg";
import "./App.css";
import VendingMachine from "./VendingMachine";
import DietCoke from "./DietCoke";
import SparklingWater from "./SparklingWater";
import OrangeJuice from "./OrangeJuice";
import Oreo from "./Oreo";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route path="/diet-coke" element={<DietCoke />} />
          <Route path="/sparkling-water" element={<SparklingWater />} />
          <Route path="/orange-juice" element={<OrangeJuice />} />
          <Route path="/oreo" element={<Oreo />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      {/*<VendingMachine />
      <DietCoke />
      <SparklingWater />
  <OrangeJuice />*/}
    </div>
  );
}

export default App;
