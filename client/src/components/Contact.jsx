import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div className = "text-center">
        <p>This site isn't the only place you can find my work at. I've linked my social media accounts below.</p>

        <div className="row">
            <div className="col-md-12">
              <a className="btn btn-social-icon btn-lg btn-instagram" href="http://instagram.com/mb85photography"><i className="fa fa-instagram fa-3x">
          
              </i></a>
              <a className="btn btn-social-icon btn-lg btn-twitter" href="https://twitter.com/MB85Photography"><i className="fa fa-twitter fa-3x">
              
              </i></a>

              <a className="btn btn-social-icon btn-lg btn-flickr" href="https://www.flickr.com/people/130256806@N05/"><i className="fa fa-flickr fa-3x">
                
              </i></a>

              <a className="btn btn-social-icon btn-lg btn-tumblr" href="http://mb85photography.tumblr.com/"><i className="fa fa-tumblr fa-3x">
                
              </i></a>
            </div>
            
            <p className= "socialdesc"> My handle on all of the above accounts will be MB85Photography. Send me an email at MB85Photography@gmail.com</p>

            <a href="mailto:Mb85Photography@gmail.com"> <button type="button" className="btn btn-email" action="mailto:MB85Photography@gmail.com"><i className="fa fa-envelope fa-2x"></i></button></a>
        </div>


      </div>
    );
  }

}

export default Contact;
