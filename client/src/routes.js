import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Models from './components/Models.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import CenterPane from './components/CenterPane.jsx';
import ModelProfile from './components/ModelProfile.jsx';


export default (
  <Router history = {browserHistory}>
      <Route path="/" component={App}>
         <Route path="/models" component={Models} />
          <Route path='/Angelica' component={ModelProfile} />
         <Route path="/projects" component={Projects} />
         <Route path="/contact" component={Contact} />
         <Route path="/about" component={About} />
      </Route>
  </Router>
);