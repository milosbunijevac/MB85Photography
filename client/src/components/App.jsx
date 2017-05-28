import React from 'react';
import CenterPane from './CenterPane.jsx';
import TopPane from './TopPane.jsx';
import Models from './Models.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Router from 'react-router';

import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = { modelBucket: ['Loading...']};
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

          <div className="container-fluid">    
            <div className="row content imageThumbMargin">
              <div> 
                {React.Children.map(this.props.children, child => React.cloneElement(child,
                  { 
                    modelNames: this.state.modelBucket.data, 
                    path: this.props.route.path
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
