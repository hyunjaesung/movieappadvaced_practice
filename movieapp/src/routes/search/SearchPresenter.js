import propTypes from "prop-types";
import styled from "styled-components";
import React from "react";
import Loading from "../../components/Loading";
import Section from "../../components/Section";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
margin-top : 30px;
  margin-bottom: 50px;
  width: 100vw;
`;

const Input = styled.input`
  all: unset;
  font-size: 15px;
  width: 100vw;
`;

const SearchPresenter = ({
  movieResult,
  showResult,
  searchTerm,
  error,
  loading,
  _handleSubmit,
  _updateTerm
}) => (
  <Container>
    <Form onSubmit={_handleSubmit}>
      <Input
        placeholder="Search movie or Tv shows"
        value={searchTerm}
        onChange={_updateTerm}
      />
    </Form>
    {loading ? (
      <Loading />
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section
            title="MovieResult"
            children={movieResult.map(movie => (
              <Poster key ={movie.id} id = {movie.id} imgUrl ={movie.poster_path} title={movie.original_title}
             rating ={movie.vote_average} year={movie.release_date.substring(0,4)} isMovie={true}/>
              
            ))}
          />
        )}
        {showResult && showResult.length > 0 && (
          <Section
            title="ShowResult"
            children={showResult.map(show => (
              <Poster key ={show.id} id = {show.id} imgUrl ={show.poster_path} title={show.original_name} 
            rating ={show.vote_average} year={(show.first_air_date && show.first_air_date.substring(0,4))}/>
            ))}
          />
        )}
        {error && (<Message color ="red" text = {error}/>)

        }
         {movieResult && showResult && showResult.length ===0 && movieResult.length ===0 && (
          <Message color = "grey" text = "nothing founded"
          />
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResult: propTypes.array,
  showResult: propTypes.array,
  searchTerm: propTypes.string,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
  _handleSubmit: propTypes.func.isRequired,
  _updateTerm: propTypes.func.isRequired
};

export default SearchPresenter;
