import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import React from "react";
import Loading from "../../components/Loading";

const Container = styled.div``;

const ShowPresenter = ({ topRated, airingToday, popular, error, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section
          title="TopRated"
          children={topRated.map(show => (
            <span>{show.original_name}</span>
          ))}
        />
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="Airing Today"
          children={airingToday.map(show => (
            <span>{show.original_name}</span>
          ))}
        />
      )}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map(show => (
            <span>{show.original_name}</span>
          ))}
        />
      )}
    </Container>
  );

ShowPresenter.propTypes = {
  topRated: propTypes.array,
  airingToday: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default ShowPresenter;
