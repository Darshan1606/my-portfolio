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
    <div
      className="relative bg-[#0A0A0A] min-h-screen"
      style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
    >
      {/* Minimal Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Ultra-subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]"></div>
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
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
              <div className="relative bg-[#0A0A0A] min-h-screen">
                {/* Common Background Effects for Blog Page */}
                <div className="fixed inset-0 pointer-events-none">
                  <div className="absolute -top-20 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
                  <div className="absolute bottom-40 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50"></div>
                </div>
                <div className="relative">
                  <Navbar />
                  <Blog />
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
