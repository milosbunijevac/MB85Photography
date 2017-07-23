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
        ModelPage
        {/* {this.props.modelNames.map((model, i) => {
          return (
            <div key={i} className = "imageThumbs col-md-2">
              <ModelCard key={i} model={model} />
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Models;
