import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto md:px-12 px-5">
      <NavBar/>
      <PriceOptions/>
    </div>
  );
}

export default App;
