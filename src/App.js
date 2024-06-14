import './styles/App.css';

import { BrowserRouter, Router, Route } from 'react-router-dom';

import Home from './components/Home'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Home />
      <Experience />
      <Portfolio />
      <Skills />
    </>
  );
}

export default App;
