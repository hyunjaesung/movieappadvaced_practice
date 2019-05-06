import React from 'react';
import MoviePresenter from './MoviePresenter';

class movieContainer extends React.Component{
    state ={
        nowplaying:null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true
    }

    render(){
        const {nowplaying,
            upcoming,
            popular,
            error,
            loading} = this.state;
       return(<MoviePresenter nowplaying={nowplaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}/>)
    }
}


export default movieContainer;