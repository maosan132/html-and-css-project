import React from 'react';
import logo from './logo.png';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Projects} from './components/Projects';
import Articles from './components/Articles';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />

        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">

            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/services" className="item">Services</Link>
            <Link to="/works" className="item">Works</Link>
            <Link to="/contact" className="item">Contact</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
