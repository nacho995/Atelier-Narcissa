import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
