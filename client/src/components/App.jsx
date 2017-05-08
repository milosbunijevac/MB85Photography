import React from 'react';
import LeftPane from './LeftPane.jsx';
import RightPane from './RightPane.jsx';
import CenterPane from './CenterPane.jsx';
import TopPane from './TopPane.jsx';

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
              <div className="col-sm-2 sidenav">
                <LeftPane />
              </div>
              <div className="col-sm-10 text-left"> 
                <CenterPane />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
