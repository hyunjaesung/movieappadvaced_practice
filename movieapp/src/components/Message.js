import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Container = styled.div ``;
const Text = styled.div `
    color : ${props => props.color}; 
`;

const Message = (props) => 
(<Container>
    <Text color = {props.color}>
        {props.text}
    </Text>
</Container>);

Message.propTypes = {
    text : propTypes.string.isRequired,
    color : propTypes.string.isRequired
}

export default Message;