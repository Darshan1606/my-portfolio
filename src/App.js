import "./assets/style/App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience.js";

function App() {
  return (
    <div className="App">
      <div className="topHero">
        <Navbar />
        <Hero />
      </div>

      <Skills />

      <Projects />
      <WorkExperience />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
