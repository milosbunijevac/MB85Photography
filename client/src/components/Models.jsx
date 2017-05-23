import React from 'react';
import ModelCard from './ModelCard.jsx';
import axios from 'axios';

class Models extends React.Component {
  constructor() {
    super();
    this.state = { modelList: [] };
  }

  render() {
    return (
      <div>
        <p>Models Page</p>
        {this.props.modelNames.map((model) => {
          return (
            <div>
              <ModelCard model={model} />
            </div>
          );
        })}
        

      </div>
    );
  }
}

export default Models;
