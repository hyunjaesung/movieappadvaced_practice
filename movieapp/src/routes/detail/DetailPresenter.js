import Proptypes from "proptypes";

const DetailPresenter = ({result,
    error,
    loading}) => null;

DetailPresenter.Proptypes ={
    result:Proptypes.array,
    error:Proptypes.string,
    loading:Proptypes.bool.isRequired
}

export default DetailPresenter;