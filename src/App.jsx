import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import {
  default as BlogDetailPage,
  default as ProgramDetailPage,
} from "./pages/BlogDetailPage";
import BlogPage from "./pages/BlogPage";
import LandingPage from "./pages/LandingPage";
import NoticePage from "./pages/NoticePage";
// import GalleryPage from "./pages/GalleryPage";
import Data from "./data.json";
import AlbumPage from "./pages/AlbumPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route
          path="/notices/:id"
          element={<BlogDetailPage data={Data.notices} />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage data={Data.blog} />} />
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
