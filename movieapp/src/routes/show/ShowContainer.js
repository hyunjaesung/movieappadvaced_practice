import React from 'react';
import ShowPresenter from './ShowPresenter';
import { showApi } from '../../api';

class ShowContainer extends React.Component{
    state ={
        topRated:null,
        airingToday:null,
        popular:null,
        error:null,
        loading:true
    }

async componentDidMount(){
    try{
        const {data : {results : topRated}} = await showApi.topRated();
        const {data : {results : airingToday}} = await showApi.airingToday();
        const {data : {results : popular}} = await showApi.popular();
        this.setState({topRated,airingToday
            ,popular});
    }catch{
        this.setState({error : "show data can't find"});
    }finally{
        this.setState({loading:false});
    }
}

    render(){
        const {topRated,
            airingToday,
            popular,
            error,
            loading} = this.state;
            console.log(this.state);
       return(<ShowPresenter topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}/>)
    }
}


export default ShowContainer;