import React from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends React.Component{
    state ={
        movieResult:null,
        showResult:null,
        searchTerm:"",
        error:null,
        loading:false
    }

    render(){
        const {movieResult,
            showResult,
            searchTerm,
            error,
            loading} = this.state;
       return(<SearchPresenter movieResult={movieResult}
        showResult={showResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}/>)
    }
}


export default SearchContainer;