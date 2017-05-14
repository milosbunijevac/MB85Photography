import React from 'react';

class Models extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
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

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Models;
