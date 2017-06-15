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
import Evie from './components/AllModels/Evie.jsx';
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
import Veronica from './components/AllModels/Veronica.jsx';
import YarynaSkabyk from './components/AllModels/YarynaSkabyk.jsx';

export default (
  <Router history = {browserHistory}>
      <Route path="/" component={App}>
         <Route path="/models" component={Models} />
          <Route path='/Angelica' component={Angelica} />
          <Route path='/Anna%20Ilina' component={AnnaIlina} />
          <Route path="/Ashley%20SattelMaier" component={AshleySattelmaier} />
          <Route path='/Deanna%20Dellia' component={DeannaDellia} />
          <Route path='/Evie' component={Evie} />
          <Route path='/Jean%20Evelyn' component={JeanEvelyn} />
          <Route path='/Jessica%20Lari' component={JessicaLari} />
          <Route path='/Johnae%20M' component={JohnaeM} />
          <Route path='/Katherine%20Lyness' component={KatherineLyness} />
          <Route path='/Ladie%20K' component={LadieK} />
          <Route path='/Lieshia' component={Lieshia} />
          <Route path='/Lucie%20Riviere' component={LucieRiviere} />
          <Route path='/Nina' component={Nina} />
          <Route path='/Tatiana%20Thompson' component={TatianaThompson} />
          <Route path='/Taylor' component={Taylor} />
          <Route path='/Veronica' component={Veronica} />
          <Route path='/Yaryna%20Skabyk' component={YarynaSkabyk} />
         <Route path="/projects" component={Projects} />
         <Route path="/contact" component={Contact} />
         <Route path="/about" component={About} />
      </Route>
  </Router>
);