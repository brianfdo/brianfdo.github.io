// import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Welcome from './components/Welcome.js';
import './App.css';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className="container mt-5">
        <Welcome />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
