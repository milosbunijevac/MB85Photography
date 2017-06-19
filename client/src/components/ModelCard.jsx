import React from 'react';
import {Link} from 'react-router';

class ModelCard extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div>
        <Link to={'/' + this.props.model.linkUrl}><div>
          {console.log(this.props.model.linkUrl)}
          <img src={this.props.model.imageUrl} />
          <p className="text-center imageMarginRight modeltextField">{this.props.model.name}</p>
        </div></Link>
      </div>
    );
  }
}

export default ModelCard = ModelCard;