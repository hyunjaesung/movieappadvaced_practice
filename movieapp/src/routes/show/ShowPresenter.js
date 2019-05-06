import Proptypes from "proptypes";

const ShowPresenter = ({topRated,
    airingToday,
    popular,
    error,
    loading}) => null;

ShowPresenter.Proptypes ={
    topRated:Proptypes.array,
    airingToday:Proptypes.array,
    popular:Proptypes.array,
    error:Proptypes.string,
    loading:Proptypes.bool.isRequired
}

export default ShowPresenter;