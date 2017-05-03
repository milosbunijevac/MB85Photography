import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { none: 'none' };
  }

  render() {
    return (
      <div>
        <h1>This is the app component</h1>
      </div>
    );
  }
}

export default App;
