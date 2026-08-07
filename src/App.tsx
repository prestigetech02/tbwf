import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import WhoWeArePage from '@/pages/WhoWeArePage';
import OurVisionaryPage from '@/pages/OurVisionaryPage';
import AnnualBusinessSummitPage from '@/pages/AnnualBusinessSummitPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/our-visionary" element={<OurVisionaryPage />} />
          <Route
            path="/annual-business-summit"
            element={<AnnualBusinessSummitPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
