import React from 'react';
import axios from 'axios';

class Models extends React.Component {
  constructor() {
    super();
    this.state = { modelList: '' };

    axios({
      method: 'POST',
      url: '/modelcall'
    })
    .then((response) => {
      console.log('this is the axios call from models.jsx (the response) :', response);
    })
    .catch((error) => {
      console.log('this is an error from the axios call in models.jsx', error);
    });
  }


  
  

  render() {
    return (
      <div>
        <div className= "col-sm-3">
          <nav className="navbar navbar-inverse modelbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar2">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar2">
                <ul className="nav navbar-nav modelnavbar">
                  <li>TEST LINK 1</li>
                  <li>TEST LINK 2</li>
                  <li>TEST LINK 3</li>
                  <li>TEST LINK 4</li>
                  <li>TEST LINK 5</li>
                  <li>TEST LINK 6</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className= "col-sm-9 text-left">
          <p>Models page</p>
        </div>


      </div>
    );
  }
}

export default Models;
