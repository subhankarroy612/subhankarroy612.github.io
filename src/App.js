import './App.css';
import Navbar from './Components/Navbar';
import { Particle } from './Components/P_demo';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Particle/>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
