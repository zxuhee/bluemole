import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color:rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 70px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => props.current? "#3498db" : "transparent"};
    transition: border-bottom 0.4s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Home</SLink>
            </Item>
            <Item current={pathname === "/script"}>
                <SLink to="/script">script</SLink>
            </Item>
            <Item current={pathname === "/career"}>
                <SLink to="/career">career</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));