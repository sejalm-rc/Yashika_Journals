import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import Journals from "./pages/Journals";
import EditorialBoard from "./pages/EditorialBoard";
import AuthorGuidlines from "./pages/authors/AuthorGuidelines";
import ArticleProcessingCharges from "./pages/authors/ArticleProcessingCharges";
import IndexingAbstracting from "./pages/about/IndexingAbstracting";
import OpenAccessPolicy from "./pages/about/OpenAccessPolicy";
import CurrentIssue from "./pages/CurrentIssue";
import Archives from "./pages/Archives";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import PublicationEthics from "./pages/authors/PublicationEthics";
import PeerReviewProcess from "./pages/authors/PeerReviewProcess";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/indexing-and-abstracting" element={<IndexingAbstracting />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/article-processing-charges" element={<ArticleProcessingCharges />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/author-guidelines" element={<AuthorGuidlines />} />
        <Route path="/current-issue" element={<CurrentIssue />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/publication-ethics" element={<PublicationEthics />} /><Route
  path="/peer-review-process"
  element={<PeerReviewProcess />}
/>
        <Route path="/publication-ethics" element={<PublicationEthics />} />

      
        <Route path="/open-access-policy" element={<OpenAccessPolicy />} />
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
