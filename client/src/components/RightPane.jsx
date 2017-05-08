import React from 'react';

class RightPane extends React.Component {
  constructor() {
    super();
    this.state = { nothing: 'nothing' };
  }

  render() {
    return (
      <div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ nothing: 'nothing' });
  }
}

export default RightPane;
