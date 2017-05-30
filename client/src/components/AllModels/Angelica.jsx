import React from 'react';
import axios from 'axios';

class Angelica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Angelica'};
  }

  componentWillMount() {
    axios({
      method: 'POST',
      url: '/aaa',
      data: {deets: 'Can you see these deets server?'}
    })
    .then((response) => {
      console.log('this is the axios call from angelica.jsx (the response) :', response);
    })
    .catch((error) => {
      console.log('this is an error from the axios call in angelica.jsx', error);
    });
  }

  render() {
    return (
      <div>
        THIS IS ANGELICAS PAGE!
      </div>
    );
  }
}

export default Angelica;