import "normalize.css";
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from "./components/navigate/Navigate";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Router>
        <Navigate />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
