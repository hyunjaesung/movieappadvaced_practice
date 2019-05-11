import propTypes from "prop-types";
import React from "react";
import Loading from "../../components/Loading";
import styled from "styled-components";
import Message from "../../components/Message";

const Container = styled.div``

const Backdrop = styled.div`
  position:absolute;
  top:0;
  left:0;
  width : 100%;
  height : 100%;
  background-image : url(${props => props.bgImg});
  background-size:cover;
  filter:blur(3px);
  opacity:0.5;
  z-index:1;
`;

const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width :100%;
  height:100%;
  margin-top:30px;
  z-index:3;
`;

const Img = styled.div`
  background-image : url(${props => props.coverImg});
  background-size:cover;
  background-position:center center;
  width : 40vw;
  height : 80vh;
  z-index:5;
  opacity:0.7;
  border-radius:15px;
`;

const Data = styled.div`
  width : 40vw;
  height : 80vh;
  background:black;
  border-radius:15px;
`;

const Title = styled.div`

`;

const Genre = styled.div``;
const Overview = styled.div``;

const DetailPresenter = ({ result, error, loading }) => loading ? <Loading/>: 
<Container>
  {error && <Message color = "red" error ={error}/>}
  <Backdrop bgImg = {`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
  <Content>
    <Img coverImg = {`https://image.tmdb.org/t/p/original${result.poster_path}`}/>
    <Data>
        <Title>{result.original_title ? result.original_title : result.original_name}</Title>
        <Genre>{result.genres.map((genre, index) => index === result.genres.length -1 ? genre.name: `${genre.name} / ` )}</Genre>
        <Overview>{result.overview}</Overview>
        
    </Data> 
  </Content>
</Container>

;

DetailPresenter.propTypes = {
  result: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default DetailPresenter;
