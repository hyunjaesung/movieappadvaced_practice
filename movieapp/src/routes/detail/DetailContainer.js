import React from "react";
import DetailPresenter from "./DetailPresenter";
import { showApi, movieApi } from "../../api";

class DetailContainer extends React.Component {
  // props값 이용해서 초기화 위해서 생성자 필요

  constructor(props) {
    super(props);

    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    // 정수만 들어오게
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return push("/");
    }

    try {
      if (this.state.isMovie) {
        const movieRes = await movieApi.movieDetail(parsedId);
        console.log(movieRes.data);
        this.setState({ result: movieRes.data });
      } else {
        const showRes = await showApi.showDetail(parsedId);
        this.setState({ result: showRes.data });
      }
    } catch {
      this.setState({ error: "detail error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
