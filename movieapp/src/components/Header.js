import React from"react"
import {Link, withRouter} from "react-router-dom";
import styled from"styled-components";

const Header = styled.header`color: white;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 50px;
display: flex;
align-items: center;
background-color: rgba(20, 20, 20, 0.8);
z-index: 10;
box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);`;
const List = styled.ul`
    display: flex;
`;
    

const SLink = styled(Link)` height: 50px;
display: flex;
align-items: center;
justify-content: center;`;

const Item = styled.li`
${props => (props.current ? "#3498db" : "transparent")};
width: 80px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
  border-bottom: 3px solid;
`;


const header = withRouter(({location:{pathname}}) => (
    <Header classname="nav">
        <List>
            <Item current = {pathname === "/"}>
                <SLink to = "/">Movie</SLink>
            </Item>
            <Item current = {pathname === "/show"}>
                <SLink to = "/show">TV Show</SLink>
            </Item>
            <Item current = {pathname === "/search"}>
                <SLink to = "/search">Search</SLink>
            </Item>
        </List>
    </Header>
));


export default header;