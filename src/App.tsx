
import "./App.css";
import AnimatedCursor from "react-animated-cursor"
import LandingPage from "./Pages/LandingPage";
import { GlobalContext } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound";
import { useState } from "react";


function App() {
  // global states
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);


  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ showBackToTop, setShowBackToTop, search, setSearch, open, setOpen }}>
        <div className="mx-auto max-w-7xl">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: 'var(--cursor-color)'
            }}
            outerStyle={{
              border: '3px solid var(--cursor-color)'
            }}
          />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter >
  );
}

export default App;
