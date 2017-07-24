import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

//load component based on the routh path


class ModelProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.match.params.name};
  }

  componentWillMount() {
    axios({
      method: 'POST',
      url: '/modelindiv',
      data: {model: this.state.name}
    })
    .then((response) => {
      console.log('this is the axios call from ModelProfile.jsx (the response) :', response);
      this.setState({images: response.data});
    })
    .catch((error) => {
      console.log('this is an error from the axios call in ModelProfile.jsx', error);
    });
  }

  render() {
    let modelPic = (this.state.images) ? this.state.images[0].imageUrls : '#'
    return (
      <div>

        <div className="row">
          <img className='modelPrevPic col-md-4' src={modelPic} alt="Generic placeholder image"/>
          <div className='col-md-8'>
            <h5 className="row modelName">Model Name: {this.state.name && this.props.match.params.name}</h5>
          </div>
        </div>

        <div className="row modelPhotos">
          {(this.state.images) ? this.state.images.map((model, index) => {
            return (
              <div key={index} className="col-md-4 imageThumbs">
                  <h4 className="hoverTextModel">

                  </h4>
                  <a href={model.imageUrls}>
                    <img src={model.imageUrls} />
                  </a>
              </div>
            )
          }) : console.log('The page is loading.')}
        </div> 

        
      </div>
    );
  }
}

export default ModelProfile;