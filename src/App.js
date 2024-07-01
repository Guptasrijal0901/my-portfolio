// src/App.js
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Positions from './components/Positions';
import Extracurricular from './components/Extracurricular';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Achievements />
      <Skills />
      <Positions />
      <Extracurricular />
    </div>
  );
}

export default App;
