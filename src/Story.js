import React from "react";

class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <a href={this.props.story.url}>{this.props.story.title}</a>;
  }
}

export default Story;
