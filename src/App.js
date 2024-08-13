import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SystemState from "./context/SystemState";
import Card from "./components/Card";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UpcomingPage from "./pages/UpcomingPage";
import TopRatedPage from "./pages/TopRatedPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <SystemState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/top-rated" element={<TopRatedPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </Router>
      </SystemState>
    </div>
  );
}

export default App;
