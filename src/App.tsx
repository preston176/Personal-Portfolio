
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { GlobalContext } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound";
import { useEffect, useState } from "react";


function App() {
  // global states
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      // console.log("You just pressed Control and K!");
      setSearch(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ showBackToTop, setShowBackToTop, search, setSearch, open, setOpen }}>
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
