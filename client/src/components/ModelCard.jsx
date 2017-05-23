import React from 'react';

class ModelCard extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div>
        <img src={this.props.model.imageUrl} />
        <p> Name: {this.props.model.name}</p>
      </div>
    );
  }
}

export default ModelCard = ModelCard;