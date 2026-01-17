import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './Navbar.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function AppContent() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
   return (
    <HashRouter>
      <div>
        <NavigationBar></NavigationBar>
               <AppContent />
        <div class="container">
        <div class="column drag"></div>
          <div class="column zoom"></div>
          <div class="column not-allowed"></div>
        </div>
      </div>
    </HashRouter>
      )
}
export default App