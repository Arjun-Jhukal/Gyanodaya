import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NoticePage from "./pages/NoticePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProgramDetailPage from "./pages/BlogDetailPage";
import GalleryPage from "./pages/GalleryPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/faculty" element={<ProgramDetailPage />} />
        <Route path="/album" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
