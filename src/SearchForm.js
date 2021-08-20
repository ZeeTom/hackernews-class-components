import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formData: "" };
  }

  change = (evt) => {
    this.setState({ formData: evt.target.search.value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    
  }

  render() {
    return (
      <form onsubmit={this.handleSubmit} className="SearchForm">
        <div>
          <input 
            name="search"
            onChange={this.change} />
          <input type="submit" />
        </div>
      </form>
    )
  }
}

export default SearchForm;
