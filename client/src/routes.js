import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Models from './components/Models.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import CenterPane from './components/CenterPane.jsx';
import ModelProfile from './components/ModelProfile.jsx';
import Angelica from './components/AllModels/Angelica.jsx';
import AnnaIlina from './components/AllModels/AnnaIlina.jsx';
import AshleySattelmaier from './components/AllModels/AshleySattelmaier.jsx';
import DeannaDellia from './components/AllModels/DeannaDellia.jsx';


export default (
  <Router history = {browserHistory}>
      <Route path="/" component={App}>
         <Route path="/models" component={Models} />
          <Route path='/Angelica' component={Angelica} />
          <Route path='/Anna Ilina' component={AnnaIlina} />
          <Route path='/Ashley SattelMaier' component={AshleySattelmaier} />
          <Route path='/Deanna Dellia' component={DeannaDellia} />
         <Route path="/projects" component={Projects} />
         <Route path="/contact" component={Contact} />
         <Route path="/about" component={About} />
      </Route>
  </Router>
);