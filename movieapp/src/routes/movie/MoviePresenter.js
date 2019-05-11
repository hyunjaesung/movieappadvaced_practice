import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import React from "react";
import Loading from "../../components/Loading";
import Poster from "../../components/Poster";
import Message from "../../components/Message";


const Container = styled.div``;

const MoviePresenter = ({ nowplaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {nowplaying && nowplaying.length > 0 && (
        <Section title="Nowplaying">
          {nowplaying.map(movie => (
            <Poster key ={movie.id} id = {movie.id} imgUrl ={movie.poster_path} title={movie.original_title}
             rating ={movie.vote_average} year={movie.release_date.substring(0,4)} isMovie={true}/>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
            <Poster key ={movie.id} id = {movie.id} imgUrl ={movie.poster_path} title={movie.original_title} rating ={movie.vote_average} year={movie.release_date.substring(0,4)} isMovie={true}/>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <Poster key ={movie.id} id = {movie.id} imgUrl ={movie.poster_path} title={movie.original_title} rating ={movie.vote_average} year={movie.release_date.substring(0,4)} isMovie={true}/>
          ))}
        </Section>
      )}
      {error && (<Message color = "red" error = {error} />)}
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
