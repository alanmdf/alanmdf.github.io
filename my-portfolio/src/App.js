import React from 'react';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <hr />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
