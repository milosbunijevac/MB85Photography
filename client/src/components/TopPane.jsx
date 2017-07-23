import React from 'react';
import {Link} from 'react-router-dom';

class TopPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fullwidth">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-left">
                <li>Milos Bunijevac presents MB85Photography</li>
              </ul>
              <ul className="nav navbar-nav text-center navDesign">
                <li className="active"><Link to = {'/'}>Home</Link></li>
                <li><Link to = {'/models'}> Models</Link></li>
                <li><Link to = {'/projects'}>Projects</Link></li>
                <li><Link to = {'/contact'}>Contact</Link></li>
                <li><Link to = {'/about'}>About Me</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopPane;