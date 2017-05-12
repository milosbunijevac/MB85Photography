import React from 'react';
import {Link} from 'react-router';

class TopPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
              <Link className="navbar-brand" to={'/'}>Logo</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><Link to = {'/'}>Home</Link></li>
                <li><Link to = {'/models'}> Models</Link></li>
                <li><Link to = {'/projects'}>Projects</Link></li>
                <li><Link to = {'/contact'}>Contact</Link></li>
                <li><Link to = {'/about'}>About Me</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopPane;