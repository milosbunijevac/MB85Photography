import React from 'react';
import LeftPane from './LeftPane.jsx';
import RightPane from './RightPane.jsx';
import CenterPane from './CenterPane.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = { none: 'none' };
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className = "col-md-3 leftPaned">
            <LeftPane />
          </div>
          <div className = "col-md-6 centerPaned">
            <CenterPane />
          </div>
          <div className = "col-md-3 rightPaned">
            <RightPane />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
