
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { GlobalContext } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound";
import { useState } from "react";


function App() {
  // global states
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ showBackToTop, setShowBackToTop, open, setOpen }}>
        <div className="mx-auto max-w-7xl">
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
