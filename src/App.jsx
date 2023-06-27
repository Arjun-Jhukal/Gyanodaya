import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NoticePage from "./pages/NoticePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProgramDetailPage from "./pages/BlogDetailPage";
// import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AlbumPage from "./pages/AlbumPage";
import GalleryPage from "./pages/GalleryPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/notices/:id" element={<NoticePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/faculty" element={<ProgramDetailPage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/album/:id" element={<GalleryPage />} />
        <Route path="/team/:id" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
