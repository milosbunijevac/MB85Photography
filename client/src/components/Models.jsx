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
      <div>
        <div className="row">
          <div className="col-md-4">

          </div>
        </div>

      </div>
    );
  }
}

export default Models;
