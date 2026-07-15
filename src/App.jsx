import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Journals from "./pages/Journals";
import EditorialBoard from "./pages/EditorialBoard";
import CurrentIssue from "./pages/CurrentIssue";
import Archives from "./pages/Archives";
import Contact from "./pages/Contact";

import IndexingAbstracting from "./pages/about/IndexingAbstracting";
import SubscriptionPolicy from "./pages/about/SubscriptionPolicy";

import ArticleProcessingCharges from "./pages/FooterPages/ArticleProcessingCharges";
import PeerReviewProcess from "./pages/FooterPages/PeerReviewProcess";

import AuthorGuidlines from "./pages/FooterPages/AuthorGuidelines";
import OpenAccessPolicy from "./pages/FooterPages/OpenAccessPolicy";
import PublicationEthics from "./pages/FooterPages/PublicationEthics";
import SubmitManuscript from "./pages/FooterPages/SubmitManuscript";
import CopyrightPolicy from "./pages/FooterPages/CopyrightPolicy";
import PrivacyPolicy from "./pages/FooterPages/PrivacyPolicy";
import TermsOfUse from "./pages/FooterPages/TermsOfUse";
import ConflictOfInterest from "./pages/FooterPages/ConflictOfInterest";
import PlagiarismPolicy from "./pages/FooterPages/PlagiarismPolicy";

/* Footer pages that should not show Navbar and Footer */
const hideLayoutRoutes = [
  "/author-guidelines",
  "/open-access-policy",
  "/publication-ethics",
  "/peer-review-process",
  "/submit-manuscript",
  "/copyright-policy",
  "/article-processing-charges",
  "/privacy-policy",
  "/terms-of-use",
  "/conflict-of-interest",
  "/plagiarism-policy",
  "/peer"
];

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/indexing-and-abstracting"
          element={<IndexingAbstracting />}
        />
        <Route path="/journals" element={<Journals />} />
        <Route
          path="/article-processing-charges"
          element={<ArticleProcessingCharges />}
        />
        <Route
          path="/subscription-policy"
          element={<SubscriptionPolicy />}
        />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/current-issue" element={<CurrentIssue />} />
        <Route path="/archives" element={<Archives />} />
        
        <Route path="/contact" element={<Contact />} />

        {/* Footer pages */}
        <Route
          path="/author-guidelines"
          element={<AuthorGuidlines />}
        />
        <Route
          path="/publication-ethics"
          element={<PublicationEthics />}
        />
        <Route
          path="/peer-review-process"
          element={<PeerReviewProcess />}
        />
        <Route
          path="/submit-manuscript"
          element={<SubmitManuscript />}
        />
        <Route
          path="/copyright-policy"
          element={<CopyrightPolicy />}
        />
        <Route
          path="/open-access-policy"
          element={<OpenAccessPolicy />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/terms-of-use"
          element={<TermsOfUse />}
        />
        <Route
          path="/conflict-of-interest"
          element={<ConflictOfInterest />}
        />
        <Route
          path="/plagiarism-policy"
          element={<PlagiarismPolicy />}
        />

        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppLayout = () => {
  const location = useLocation();

  const normalizedPath =
    location.pathname.length > 1
      ? location.pathname.replace(/\/+$/, "")
      : location.pathname;

  const hideLayout = hideLayoutRoutes.includes(normalizedPath);

  return (
    <div className="flex min-h-screen flex-col">
      {!hideLayout && <Navbar />}

      <ScrollToTop />

      <main className="flex-1">
        <AnimatedRoutes />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;