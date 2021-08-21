import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formData: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ formData: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSearch(this.state.formData);
    this.setState({ formData: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SearchForm">
        <div>
          <input name="search" onChange={this.handleChange} />
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default SearchForm;
