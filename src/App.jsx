import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllComponents from "./Components/AllComponents";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BackgroundGradient from "./Components/BackgroundGradient";

import LearnMore from "./Components/LearnMore";

function App() {
  return (
    <Router>
      <BackgroundGradient />
      <Navbar />
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
