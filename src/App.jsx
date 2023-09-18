import LineChart from "./components/LineChart/LineChart";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import Phones from "./components/Phones/Phones";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto md:px-12 px-5">
      <NavBar />
      <PriceOptions />
      <div className="mt-6">
        <LineChart />
      </div>
      <Phones/>
    </div>
  );
}

export default App;
