import { Routes, Route } from 'react-router';
import BoyPage from './pages/boy/boy.jsx';
import { HomePage } from './pages/home/home.jsx';
import GirlPage from './pages/girl/girl.jsx';
import DogPage from './pages/dog/dog.jsx';
import { AboutPage } from './pages/about/about.jsx';
import { ContactPage } from './pages/contact/contact.jsx';
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/boy" element={<BoyPage />} />
      <Route path="/girl" element={<GirlPage />} />
      <Route path="/dog" element={<DogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
