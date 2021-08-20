import React from "react";
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query=";

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stories: [] };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async _search(searchTerm) {
    const resp = await axios.get(`${BASE_URL}${searchTerm}`);
    let hits = resp.data.hits.filter(hit => hit.title && hit.url )
    this.setState({ stories: hits });
  }

  async handleSearch(searchTerm) {
    this._search(searchTerm);
  }

  render() {
    return (
      <div className="StoryList">
        <SearchForm handleSearch={this.handleSearch}/>
        {this.state.stories.map(story => <Story key={story.title} story={story}/>)}
      </div>
    );
  }
}

export default StoryList;
