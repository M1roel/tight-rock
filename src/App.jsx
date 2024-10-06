import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Tourdaten from "./components/Tourdaten";
import Kontakt from "./components/Kontakt";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/*<Route path="/tourdaten" element={<Tourdaten/>} />*/}
          <Route path="/kontakt" element={<Kontakt/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
