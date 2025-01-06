import React,{useState} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

function App() {
  const [activeLink, setActiveLink] = useState(0)
  return (
    <Router>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink}/>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/about" element={<About />} />*/}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;