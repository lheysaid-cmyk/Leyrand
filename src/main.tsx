import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";

import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Insights from "./pages/Insights";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import SingleInsightPage from "./pages/SingleInsightPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="insights" element={<Insights />} />
            <Route path="insights/:id" element={<SingleInsightPage />} />
            {/* PrivacyPolicy TermsConditions */}
            <Route path="our-services" element={<Services />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
            {/* ContactUs */}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  </>
);
