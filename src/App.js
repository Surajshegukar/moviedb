
import "./App.css";
import Navbar from "./components/Navbar";
import SystemState from "./context/SystemState";

import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <SystemState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </Router>
      </SystemState>
    </div>
  );
}

export default App;
