import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import { OurStory } from "./pages/OurStory";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/ourstory" element={<OurStory/>} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
