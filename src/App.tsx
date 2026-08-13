import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import WhoWeArePage from '@/pages/WhoWeArePage';
import OurVisionaryPage from '@/pages/OurVisionaryPage';
import AnnualBusinessSummitPage from '@/pages/AnnualBusinessSummitPage';
import InfluenceHerPage from '@/pages/InfluenceHerPage';
import MayokunOreofePage from '@/pages/MayokunOreofePage';
import HficPage from '@/pages/HficPage';
import ElimCentrePage from '@/pages/ElimCentrePage';

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
          <Route path="/influenceher" element={<InfluenceHerPage />} />
          <Route path="/mayokun-oreofe" element={<MayokunOreofePage />} />
          <Route path="/hfic" element={<HficPage />} />
          <Route path="/elim-centre" element={<ElimCentrePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
