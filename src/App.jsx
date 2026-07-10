import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Authors from "./pages/Authors";
import Journals from "./pages/Journals";
import Reviewers from "./pages/Reviewers";
import Resources from "./pages/Resources";
import EditorialBoard from "./pages/EditorialBoard";
import AuthorGuidlines from "./pages/AuthorGuidelines";
import CurrentIssue from "./pages/CurrentIssue";
import Archives from "./pages/Archives";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/reviewers" element={<Reviewers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/author-guidelines" element={<AuthorGuidlines />} />
        <Route path="/current-issue" element={<CurrentIssue />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route - redirect unknown paths to Home content (SPA friendly) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
          <ScrollToTop />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
