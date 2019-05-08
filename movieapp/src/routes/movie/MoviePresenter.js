import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import React from "react";
import Loading from "../../components/Loading";

const Container = styled.div``;

const MoviePresenter = ({ nowplaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {nowplaying && nowplaying.length > 0 && (
        <Section title="Nowplaying">
          {nowplaying.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

MoviePresenter.propTypes = {
  nowplaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default MoviePresenter;
