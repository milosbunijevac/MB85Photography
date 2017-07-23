import React from 'react';
import CenterPane from './CenterPane.jsx';
import TopPane from './TopPane.jsx';
import Models from './Models.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';

import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = { modelBucket: {data: ['Loading']}};
  }

  componentWillMount() {
    axios({
      method: 'POST',
      url: '/modelcall'
    })
      .then((response) => {
        console.log('this is the axios call from models.jsx (the response) :', response);
        this.setState({modelBucket: response});
      })
      .catch((error) => {
        console.log('this is an error from the axios call in models.jsx', error);
      });
  }

  render() {
    return (
      <div>
        <div className="container-fullwidth">
          <div>
            <TopPane />
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route path='/models' component={Models} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
