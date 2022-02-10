import styled from "styled-components";
import { NavLink as navLink, Link as link } from "react-router-dom";

export const NavLink = styled(navLink)`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 15px;
    color: black;

    &.active {
        color: white;
    }
    &:hover {
        background: darkgray;
        color: white;
    }
`

export const NavMenu = styled.li`
    height: 100%;
`
