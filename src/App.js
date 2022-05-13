import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
