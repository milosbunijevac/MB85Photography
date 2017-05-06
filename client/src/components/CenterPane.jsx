import React from 'react';

class CenterPane extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
        <p> Center Pane </p>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default CenterPane;
