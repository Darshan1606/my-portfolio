import "./assets/style/App.css";
import "./assets/style/tro.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar.js";
import Hero from "./components/hero.js";
import Skills from "./components/skills.js";
import Projects from "./components/projects.js";
import WorkExperience from "./components/workExperience.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact.js";
import Blog from "./components/blog.js";

// Background Effects Component
const TronBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {/* Animated Red Orbs */}
    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-900/15 rounded-full filter blur-[120px] animate-pulse" />
    <div
      className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-red-800/10 rounded-full filter blur-[120px] animate-pulse"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 rounded-full filter blur-[150px] animate-pulse"
      style={{ animationDelay: "4s" }}
    />

    {/* Grid Pattern */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* Scanline Effect */}
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute w-full h-1 bg-gradient-to-b from-transparent via-red-500/10 to-transparent"
        style={{
          animation: "scanMove 8s linear infinite",
        }}
      />
    </div>

    {/* CRT Lines */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)",
      }}
    />

    {/* Noise Texture */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }}
    />

    {/* Corner Decorations - Top Left */}
    <div className="absolute top-4 left-4">
      <div className="w-16 h-16 border-t-2 border-l-2 border-red-500/30" />
      <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-red-500/20" />
    </div>

    {/* Corner Decorations - Top Right */}
    <div className="absolute top-4 right-4">
      <div className="w-16 h-16 border-t-2 border-r-2 border-red-500/30" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-red-500/20" />
    </div>

    {/* Corner Decorations - Bottom Left */}
    <div className="absolute bottom-4 left-4">
      <div className="w-16 h-16 border-b-2 border-l-2 border-red-500/30" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-red-500/20" />
    </div>

    {/* Corner Decorations - Bottom Right */}
    <div className="absolute bottom-4 right-4">
      <div className="w-16 h-16 border-b-2 border-r-2 border-red-500/30" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-red-500/20" />
    </div>

    {/* Side Data Streams */}
    <div className="absolute left-8 top-0 h-full w-px opacity-20">
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,0,0,0.3) 20%, rgba(255,0,0,0.6) 50%, rgba(255,0,0,0.3) 80%, transparent 100%)",
          backgroundSize: "100% 200%",
          animation: "dataFlow 4s linear infinite",
        }}
      />
    </div>
    <div
      className="absolute right-8 top-0 h-full w-px opacity-20"
      style={{ animationDelay: "2s" }}
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,0,0,0.3) 20%, rgba(255,0,0,0.6) 50%, rgba(255,0,0,0.3) 80%, transparent 100%)",
          backgroundSize: "100% 200%",
          animation: "dataFlow 4s linear infinite",
          animationDelay: "2s",
        }}
      />
    </div>
  </div>
);

// CSS for additional animations
const animationStyles = `
  @keyframes scanMove {
    0% { transform: translateY(-100vh); }
    100% { transform: translateY(100vh); }
  }

  @keyframes dataFlow {
    0% { background-position: 0% 0%; }
    100% { background-position: 0% -200%; }
  }
`;

function HomePage() {
  return (
    <div className="relative bg-black min-h-screen font-mono">
      {/* Inject animation styles */}
      <style>{animationStyles}</style>

      {/* Background Effects */}
      <TronBackground />

      {/* Main Content */}
      <div className="relative z-10">
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

function BlogPage() {
  return (
    <div className="relative bg-black min-h-screen font-mono">
      {/* Inject animation styles */}
      <style>{animationStyles}</style>

      {/* Background Effects */}
      <TronBackground />

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <Navbar />
        <Blog />
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
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
