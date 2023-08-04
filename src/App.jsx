
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AnimatedCursor from "react-animated-cursor"
import { Dots } from 'react-preloaders';

function App() {


  return (
    <div className="mx-auto max-w-7xl">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Dots
      background="#00fde8"
      />
    </div>
  );
}

export default App;
