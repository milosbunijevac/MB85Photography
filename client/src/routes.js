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
import Eve from './components/AllModels/Eve.jsx';
import JeanEvelyn from './components/AllModels/JeanEvelyn.jsx';
import JessicaLari from './components/AllModels/JessicaLari.jsx';
import JohnaeM from './components/AllModels/JohnaeM.jsx';
import KatherineLyness from './components/AllModels/KatherineLyness.jsx';
import LadieK from './components/AllModels/LadieK.jsx';
import Lieshia from './components/AllModels/Lieshia.jsx';
import LucieRiviere from './components/AllModels/LucieRiviere.jsx';
import Nina from './components/AllModels/Nina.jsx';
import TatianaThompson from './components/AllModels/TatianaThompson.jsx';
import Taylor from './components/AllModels/Taylor.jsx';

export default (
  <Router history = {browserHistory}>
      <Route path="/" component={App}>
         <Route path="/models" component={Models} />
          <Route path='/Angelica' component={Angelica} />
          <Route path='/Anna Ilina' component={AnnaIlina} />
          <Route path='/Ashley SattelMaier' component={AshleySattelmaier} />
          <Route path='/Deanna Dellia' component={DeannaDellia} />
          <Route path='/Eve' component={Eve} />
          <Route path='/Jean Evelyn' component={JeanEvelyn} />
          <Route path='/Jessica Lari' component={JessicaLari} />
          <Route path='/Johnae M' component={JohnaeM} />
          <Route path='/Katherine Lyness' component={KatherineLyness} />
          <Route path='/Ladie K' component={LadieK} />
          <Route path='/Lieshia' component={Lieshia} />
          <Route path='/Lucie Riviere' component={LucieRiviere} />
          <Route path='/Nina' component={Nina} />
          <Route path='/Tatiana Thompson' component={TatianaThompson} />
          <Route path='/Taylor' component={Taylor} />
         <Route path="/projects" component={Projects} />
         <Route path="/contact" component={Contact} />
         <Route path="/about" component={About} />
      </Route>
  </Router>
);