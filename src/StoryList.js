import React from "react";
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query=";

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stories: [], isLoading: true };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async _search(searchTerm) {
    const resp = await axios.get(`${BASE_URL}${searchTerm}`);
    let hits = resp.data.hits.filter((hit) => hit.title && hit.url);
    this.setState({ stories: hits });
  }

  async handleSearch(searchTerm) {
    this.setState({ isLoading: true });
    console.log(searchTerm);
    await this._search(searchTerm);
    this.setState({ isLoading: false });
  }

  async componentDidMount() {
    await this._search("react");
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      <p>...Loading</p>;
    }

    return (
      <div className="StoryList">
        <SearchForm handleSearch={this.handleSearch} />
        <ul>
          {this.state.stories.map((story) => (
            <li key={story.title}>
              <Story story={story} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StoryList;
