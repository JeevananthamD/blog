import React from "react";
import { NavLink, NavMenu } from "../styles/Navbar";

import '../styles/Navbar.css';

const Navbar = () => {

    return(
        <nav className="nav">
            <ul>
                <NavMenu>
                    <NavLink to='/home'>Home</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/about'>About</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/article-list'>Articles</NavLink>
                </NavMenu>
            </ul>
        </nav>
    );
}

export default Navbar;