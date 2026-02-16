import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Home from './pages/Home';
import BMSKapitelView from './pages/BMSKapitelView';
import Dashboard from './pages/Dashboard';
import Lernplan from './pages/Lernplan';
import Onboarding from './pages/Onboarding';
import SEK from './pages/SEK';
import Simulation from './pages/Simulation';
import TV from './pages/TV';
import Analysis from './pages/Analysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bms-kapitel/:id" element={<BMSKapitelView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lernplan" element={<Lernplan />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/sek" element={<SEK />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;
