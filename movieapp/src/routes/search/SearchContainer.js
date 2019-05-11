import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, showApi } from "../../api";

class SearchContainer extends React.Component {
  state = {
    movieResult: null,
    showResult: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  _handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    console.log("submitted!");
    if (searchTerm !== "") {
      this._getSearchData();
    }
  };

  _updateTerm = event => {
    const {
      target: { value }
    } = event;
    // event 안의 target에는 input 태그들어가있음
    this.setState({ searchTerm: value });
  };

  _getSearchData = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    
    
    try {
      const {
        data: { results: movieResult }
      } = await movieApi.search(searchTerm);
      const {
        data: { results: showResult }
      } = await showApi.search(searchTerm);
      this.setState({ movieResult, showResult });
      
    } catch {
      this.setState({ error: "results can't find" });
    } finally {
      this.setState({ loading: false });
    }
  };
  
  render() {
    const { movieResult, showResult, searchTerm, error, loading } = this.state;
    
    return (
      <SearchPresenter
        movieResult={movieResult}
        showResult={showResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        //함수들은 state에 넣지않았는데 저리불러와서 에러,..

        _handleSubmit={this._handleSubmit}
        _updateTerm={this._updateTerm}
      />
    );
  }
}

export default SearchContainer;
