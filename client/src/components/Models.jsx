import React from 'react';
import ModelCard from './ModelCard.jsx';
import axios from 'axios';

class Models extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modelBucket: {data: ['Loading']}};
  }

  componentWillMount() {
    axios({
      method: 'POST',
      url: '/modelcall'
    })
      .then((response) => {
        console.log('this is the axios call from models.jsx (the response) :', response);
        this.setState({modelBucket: response});
      })
      .catch((error) => {
        console.log('this is an error from the axios call in models.jsx', error);
      });
  }

  render() {
    return (
      <div className="testModelBackground">
            {(this.state.modelBucket.data !== 'Loading') ? this.state.modelBucket.data.map((model, index) => {
              return (
                <div key={index} className="col-md-4 imageThumbs">
                  <h4 className="hoverTextModel">
                    {/* <div className="row">{model.name}</div>
                    <div className="row">Photos</div>  */}
                  </h4>
                  <img src={model.imageUrl} />
                </div>
              )
            }) : console.log('The page is loading.')}
      </div>
    );
  }
}

export default Models;
