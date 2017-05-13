import React from 'react';
import LeftPane from './LeftPane.jsx';
import RightPane from './RightPane.jsx';
import CenterPane from './CenterPane.jsx';
import TopPane from './TopPane.jsx';
import Models from './Models.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Router from 'react-router';

class App extends React.Component {
  constructor() {
    super();
    this.state = { none: 'none' };
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div>
            <TopPane />
          </div>
          <div className="container-fluid text-center">    
            <div className="row content">
              <div className="col-sm-12 text-center"> 
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
