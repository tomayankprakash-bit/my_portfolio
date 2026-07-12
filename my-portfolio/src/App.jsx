import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Extras from './components/Extras';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
