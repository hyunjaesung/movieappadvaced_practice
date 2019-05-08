import propTypes from "prop-types";

const DetailPresenter = ({ result, error, loading }) => null;

DetailPresenter.propTypes = {
  result: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default DetailPresenter;
