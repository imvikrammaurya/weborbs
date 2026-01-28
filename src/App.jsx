import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllComponents from "./Components/AllComponents";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
