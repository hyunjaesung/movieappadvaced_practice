import styled from "styled-components";
import React from "react";
import propTypes from "prop-types";

const Container = styled.div`
  margin-top: 30px;
  width: 100vw;
`;
const Title = styled.span``;
const Grid = styled.div`
  margin-top: 25px;
  margin-left:20px;
  margin-right:20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap:10px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ])
};

export default Section;
