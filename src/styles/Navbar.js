import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLink = styled(Link)`
    /* max-height: 100%; */
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