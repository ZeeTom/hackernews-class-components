import React from "react";
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query=";

class StoryList extends React.Component {
  state = { searchTerm: "", stories: [] };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      const resp = await axios.get(`${BASE_URL}${this.state.searchTerm}`);
      this.setState({ stories: resp.data.hits });
    }
  }

  render() {
    return (
      <div className="StoryList">
        <SearchForm />
        <Story />
      </div>
    );
  }
}

export default StoryList;
