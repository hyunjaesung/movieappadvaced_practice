import React from 'react';
import ShowPresenter from './ShowPresenter';

class ShowContainer extends React.Component{
    state ={
        topRated:null,
        latest:null,
        popular:null,
        error:null,
        loading:true
    }

    render(){
        const {topRated,
            latest,
            popular,
            error,
            loading} = this.state;
       return(<ShowPresenter topRated={topRated}
        latest={latest}
        popular={popular}
        error={error}
        loading={loading}/>)
    }
}


export default ShowContainer;