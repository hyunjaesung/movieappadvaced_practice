import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import React from "react";
import Loading from "../../components/Loading";
import Poster from "../../components/Poster";
import Message from "../../components/Message";



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
            <Poster key ={show.id} id = {show.id} imgUrl ={show.poster_path} title={show.original_name} 
            rating ={show.vote_average} year={(show.first_air_date && show.first_air_date.substring(0,4))} />
          ))}
        />
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="Airing Today"
          children={airingToday.map(show => (
            <Poster key ={show.id} id = {show.id} imgUrl ={show.poster_path} title={show.original_name} 
            rating ={show.vote_average} year={(show.first_air_date && show.first_air_date.substring(0,4))} />
          ))}
        />
      )}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map(show => (
            <Poster key ={show.id} id = {show.id} imgUrl ={show.poster_path} title={show.original_name} 
            rating ={show.vote_average} year={(show.first_air_date && show.first_air_date.substring(0,4))} />
          ))}
        />
      )}
      {error && (<Message color ="red" text = {error}/>)}
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
