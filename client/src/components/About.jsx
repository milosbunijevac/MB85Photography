import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
        <div className = "col-sm-4">
          <img className = "aboutimage" src="rockpic.jpg"></img>
        </div>

        <div className = "col-sm-8">
          <p className = "aboutText">
            My passion for photography started on a trip to San Francisco 3 years ago. Since then, I've worked with some of the top models in New York City 
            and have participated in three fashion weeks working runway shows. I shoot at various locations since I moved back to Cleveland, Ohio in November. 
            Feel free to contact me using the form below if you have any questions, requests or business inquiries. Thanks!
          </p>
        </div>

      </div>
    );
  }

}

export default About;
