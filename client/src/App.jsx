import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllComponents from "./pages/public/AllComponents";
import About from "./pages/public/About";
import Navbar from "./pages/public/Navbar";
import Footer from "./pages/public/Footer";
import BackgroundGradient from "./pages/public/BackgroundGradient";

import LearnMore from "./pages/public/LearnMore";

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
