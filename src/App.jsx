import "normalize.css";
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from "./components/navigate/Navigate";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigate />
        <Routes>
          {/* <Route path="/My-portfolio" element={<Home />} /> */}
          <Route path="/my-portfolio" element={<Home />} />
          <Route path="/my-portfolio/projects" element={<Projects />} />
          <Route path="/my-portfolio/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
