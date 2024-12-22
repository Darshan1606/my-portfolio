import "./assets/style/App.css";
import Navbar from "./components/navBar.js";
import Hero from "./components/hero.js";
import Skills from "./components/skills.js";
import Projects from "./components/projects.js";
import WorkExperience from "./components/workExperience.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact.js";

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
