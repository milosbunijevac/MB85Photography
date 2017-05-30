import React from 'react';
import axios from 'axios';

class Angelica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Angelica', images: '...Loading'};
  }

  componentWillMount() {
    axios({
      method: 'POST',
      url: '/modelindiv',
      data: {model: this.state.name}
    })
    .then((response) => {
      console.log('this is the axios call from angelica.jsx (the response) :', response);
      this.setState({images: response.data});
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