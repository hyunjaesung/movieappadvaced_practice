import Proptypes from "proptypes";


const MoviePresenter = ({nowplaying,
    upcoming,
    popular,
    error,
    loading}) => {return (null)};

MoviePresenter.Proptypes ={
    nowplaying:Proptypes.array,
    upcoming:Proptypes.array,
    popular:Proptypes.array,
    error:Proptypes.string,
    loading:Proptypes.bool.isRequired
}

export default MoviePresenter;