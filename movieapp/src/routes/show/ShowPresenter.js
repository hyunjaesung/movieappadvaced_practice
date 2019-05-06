import Proptypes from "proptypes";

const ShowPresenter = ({topRated,
    latest,
    popular,
    error,
    loading}) => null;

ShowPresenter.Proptypes ={
    topRated:Proptypes.array,
    latest:Proptypes.array,
    popular:Proptypes.array,
    error:Proptypes.string,
    loading:Proptypes.bool.isRequired
}

export default ShowPresenter;