import React from 'react';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import FundamentalsProjects from './components/FundamentalsProjects';
import FrontendProjects from './components/FrontendProjects';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <hr />
      <FundamentalsProjects />
      <hr />
      <FrontendProjects />
      <Footer />
    </div>
  );
}

export default App;
