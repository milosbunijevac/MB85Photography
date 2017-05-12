import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App.jsx';
import Models from './components/Models.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import CenterPane from './components/CenterPane.jsx';

export default (
  <Router path="/" component={App}>
    <Route path="/models" component={Models.jsx} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
  </Router>
);