import Proptypes from "proptypes";

const SearchPresenter = ({movieResult,
    showResult,
    searchTerm,
    error,
    loading}) => null;

SearchPresenter.Proptypes ={
    movieResult:Proptypes.array,
    showResult:Proptypes.array,
    searchTerm:Proptypes.string,
    error:Proptypes.string,
    loading:Proptypes.bool.isRequired
}

export default SearchPresenter;