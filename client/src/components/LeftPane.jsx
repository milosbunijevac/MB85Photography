import React from 'react';

class LeftPane extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
        <p>Left Pane</p>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default LeftPane;
