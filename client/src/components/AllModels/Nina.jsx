import React from 'react';
import axios from 'axios';

class Nina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Nina', images: ['...loading']};
  }

  componentWillMount() {
    axios({
      method: 'POST',
      url: '/modelindiv',
      data: {model: this.state.name}
    })
    .then((response) => {
      console.log('this is the axios call from Nina.jsx (the response) :', response);
      this.setState({images: response.data});
    })
    .catch((error) => {
      console.log('this is an error from the axios call in Nina.jsx', error);
    });
  }

  render() {
    return (
      <div>
        {(this.state.images.length > 0) ? this.state.images.map((photo, i) => {
          return (
            <div key={i} className="modelThumbs col-md-3">
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

export default Nina;