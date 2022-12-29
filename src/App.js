import logo from './logo.svg';
import './App.css';
// BOOTSTRAP LINK
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
