import React from 'react';

class ModelCard extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div>
        <img src={this.props.model.imageUrl} />
        <p className="text-center imageMarginRight"> Name: {this.props.model.name}</p>
      </div>
    );
  }
}

export default ModelCard = ModelCard;