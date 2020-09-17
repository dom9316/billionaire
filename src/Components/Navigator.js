import React from "react";
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components";

const Nav = styled.nav`
    position: relative;
    padding-top: 70px;
    padding-left: 30px;
    height: 100vh;
    width: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: var(--main-bg-color);
    color: var(--main-head-color);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    &:not(:last-child) {
        border-bottom: 1px solid var(--main-head-color);
    }
`;

const Item = styled.li`
    width: 120px;
    height: 40px;
    padding-left: 10px;
    border-radius: 5px;
    &:hover {
        font-weight: 700;
    }
    background-color: ${props => props.current ? "var(--main-hl-color)" : "transparent"};
    font-weight: ${props => props.current ? "700" : "300"};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SLink = styled(Link)`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export default withRouter(({ location: { pathname}}) => (
    <Nav>
        <List>
            <Item current={pathname === "/insert"}>
                <SLink to="/insert">거래입력</SLink>
            </Item>
            <Item>
                <SLink>거래내역</SLink>
            </Item>
        </List>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">대시보드</SLink>
            </Item>
            <Item>
                <SLink>수입지출</SLink>
            </Item>
            <Item>
                <SLink>자산부채</SLink>
            </Item>
            <Item>
                <SLink>수입예산</SLink>
            </Item>
            <Item>
                <SLink>지출예산</SLink>
            </Item>
            <Item>
                <SLink>자산증감</SLink>
            </Item>
            <Item>
                <SLink>포트폴리오</SLink>
            </Item>
        </List>
        <List>
            <Item current={pathname === "/setting"}>
                <SLink to="/setting">환경설정</SLink>
            </Item>
        </List>
    </Nav>
));