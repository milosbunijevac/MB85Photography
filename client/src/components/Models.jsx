import React from 'react';
import axios from 'axios';

class Models extends React.Component {
  constructor() {
    super();
    this.state = { modelList: '' };
  }

  render() {
    return (
      <div>
        <p>Models Page</p>
        {this.props.modelNames.map((model) => {
          return (
            <div>
              {model}
            </div>
          );
        })}

      </div>
    );
  }
}

export default Models;
