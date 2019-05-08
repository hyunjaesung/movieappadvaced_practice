import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, showApi } from "../../api";

class SearchContainer extends React.Component {
  state = {
    movieResult: null,
    showResult: null,
    searchTerm: "",
    error: null,
    loading: false,
    _handleSubmit: null
  };

  componentDidMount() {
    this._handleSubmit();
  }

  _handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this._getSearchData();
    }
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
    const {
      movieResult,
      showResult,
      searchTerm,
      error,
      loading,
      _handleSubmit
    } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResult={movieResult}
        showResult={showResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        _handleSubmit={_handleSubmit}
      />
    );
  }
}

export default SearchContainer;
