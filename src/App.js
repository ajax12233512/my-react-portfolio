import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Background from './components/Background/Background';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Background />
        <Navbar />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
