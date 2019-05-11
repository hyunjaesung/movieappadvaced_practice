import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Container = styled.div ``;

const Image = styled.div`

    background-image:url(${props=>props.bgUrl});
    background-size: cover; 
    height: 100%;
    border-radius: 4px;
    transition: opacity 0.3s linear;
    background-position: center center;
`;

const Rating = styled.span`
    position:absolute;
    bottom:10px;
    
`;



const Year = styled.span``;


const Title = styled.span`
    display:block;
    z-index:3;
`;

const ImageContainer = styled.div`
    height: 50vh;
    position : relative;
    z-index:10;
    &:hover{
        transform:scale(1.1);
        ${Image} {
            opacity:0.3;
        }
        ${Rating} {
            opacity:0;
        }
       
    }

    &:hover ~${Title}{
        color:transparent;
    }
    &:hover ~${Year}{
        color:transparent;
    }
`;



const Poster = ({id, imgUrl, title, rating, year, isMovie= false}) =>(
    <Link to ={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl = {`https://image.tmdb.org/t/p/w300${imgUrl}`}/>
                <Rating>{rating}/10</Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id : propTypes.number.isRequired,
    imgUrl: propTypes.string,
     title: propTypes.string.isRequired,
     rating: propTypes.number,
     year: propTypes.string,
     isMovie: propTypes.bool,
    }

export default Poster;