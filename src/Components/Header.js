import React from "react";
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 50px;
    width: 100%;
    height: 50px;
    background-color: var(--main-head-color);
    color: var(--main-bg-color);
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    z-index: 1;
`;

export default withRouter(() => (
    <Header> 
        <Link to="/">Billionaire</Link>
    </Header>
));