import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Journals from "./pages/Journals";
import EditorialBoard from "./pages/EditorialBoard";
import AuthorGuidlines from "./pages/FooterPages/AuthorGuidelines";
import ArticleProcessingCharges from "./pages/authors/ArticleProcessingCharges";
import IndexingAbstracting from "./pages/about/IndexingAbstracting";
import OpenAccessPolicy from "./pages/FooterPages/OpenAccessPolicy";
import SubscriptionPolicy from "./pages/about/SubscriptionPolicy";
import CurrentIssue from "./pages/CurrentIssue";
import Archives from "./pages/Archives";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import PublicationEthics from "./pages/FooterPages/PublicationEthics";
import SubmitManuscript from "./pages/FooterPages/SubmitManuscript";
import CopyrightPolicy from "./pages/FooterPages/CopyrightPolicy";
import PrivacyPolicy from "./pages/FooterPages/PrivacyPolicy";
import TermsOfUse from "./pages/FooterPages/TermsOfUse";
import ConflictOfInterest from "./pages/FooterPages/ConflictOfInterest";

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
        <Route path="/subscription-policy" element={<SubscriptionPolicy />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/author-guidelines" element={<AuthorGuidlines />} />
        <Route path="/current-issue" element={<CurrentIssue />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/publication-ethics" element={<PublicationEthics />} />
        <Route path="/submit-manuscript" element={<SubmitManuscript />} />
        <Route path="/copyright-policy" element={<CopyrightPolicy />} />
        <Route path="/open-access-policy" element={<OpenAccessPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/conflict-of-interest" element={<ConflictOfInterest />} />
        
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
