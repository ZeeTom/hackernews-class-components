import React from "react";

class Story extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return <h1>Story{this.props.stories}</h1>;
  }
}

export default Story;
