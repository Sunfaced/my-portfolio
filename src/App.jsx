import { lazy, Suspense } from "react";
import "normalize.css";
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from "./components/navigate/Navigate";
import Footer from "./components/footer/Footer";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import ScrollToTop from "./utils/scrollToTop";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contacts = lazy(() => import("./pages/Contacts"));

function App() {
  return (
    <>
      <Router basename="/my-portfolio">
        <ScrollToTop />
        <Navigate />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* <Route path="/My-portfolio" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
