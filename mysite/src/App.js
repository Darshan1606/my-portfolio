import "./assets/style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar.js";
import Hero from "./components/hero.js";
import Skills from "./components/skills.js";
import Projects from "./components/projects.js";
import WorkExperience from "./components/workExperience.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact.js";
import Blog from "./components/blog.js";

function HomePage() {
  return (
    <>
      <div className="topHero">
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <Projects />
      <WorkExperience />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
