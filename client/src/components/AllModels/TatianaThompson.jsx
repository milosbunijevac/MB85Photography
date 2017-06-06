import React from 'react';
import axios from 'axios';

class TatianaThompson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Tatiana+Thompson', images: ['...loading']};
  }

  componentWillMount() {
    axios({
      method: 'POST',
      url: '/modelindiv',
      data: {model: this.state.name}
    })
    .then((response) => {
      console.log('this is the axios call from Tatiana Thompson.jsx (the response) :', response);
      this.setState({images: response.data});
    })
    .catch((error) => {
      console.log('this is an error from the axios call in Tatiana Thompson.jsx', error);
    });
  }

  render() {
    return (
      <div>
        {(this.state.images.length > 0) ? this.state.images.map((photo, i) => {
          return (
            <div key={i} className="imageThumbs col-md-2">
              <a href={photo.imageUrls}>
                <img src={photo.imageUrls}/>
              </a>
            </div>
          );
        }) : console.log('The images are still loading...')}
      </div>
    );
  }
}

export default TatianaThompson;