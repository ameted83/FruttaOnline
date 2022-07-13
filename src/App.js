import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // async function fetchPlanets() {
  //   const response = await fetch("http://localhost:3000/planets");
  //   const planets = await response.json();

  //   console.log({ planets });
  // }

  // fetchPlanets();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
