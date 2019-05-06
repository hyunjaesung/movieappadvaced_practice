import React from 'react';
import MoviePresenter from './MoviePresenter';
import { movieApi } from '../../api';


class movieContainer extends React.Component{
    state ={
        nowplaying:null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true
    }


    async componentDidMount(){
        try{
            const { data : { results : nowplaying}} = await movieApi.nowplaying();
            const { data : { results : upcoming}} =await movieApi.upcoming();
            const { data : { results : popular}} = await movieApi.popular();
            this.setState({nowplaying,
                upcoming,
                popular});
        }catch{
            this.setState({error:"cant find movie data"})
        }finally{
            this.setState({loading:false});
        }
        

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