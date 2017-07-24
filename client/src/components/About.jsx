import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
        <div className = "row">
          <div className = "col-md-4">
            <img className = "aboutimage" src="rockpic.jpg"></img>
          </div>

          <div className = "col-md-8">
            <p className = "aboutText">
              My passion for photography started on a trip to San Francisco 3 years ago. Since then, I've worked with some of the top models in New York City 
              and have participated in three fashion weeks working runway shows. I shoot at various locations since I moved back to Cleveland, Ohio in November. 
            </p>

            <p className = "aboutText">
              My journey has also involved getting a degree in Chemical Engineering and working on software development. This website is my baby and work in progress. It's come a long way
              since the beginning but there's still plenty more to do. 
            </p>
          </div>

        </div>
      </div>
    );
  }

}

export default About;
