// import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
