import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <h2>Navigation</h2>
            <div>
                <NavLink to='/home' activeClassName={classes.activeLinc}>
                    <b>Home</b>
                </NavLink>
            </div>
            <div>
                <NavLink to='/counter' activeClassName={classes.activeLinc}>
                    <b>Counter</b>
                </NavLink>
            </div>
            <div>
                <NavLink to='/some1' activeClassName={classes.activeLinc}>
                    <b>Some...1</b>
                </NavLink>
            </div>
            <div>
                <NavLink to='/some2' activeClassName={classes.activeLinc}>
                    <b>Some...2</b>
                </NavLink>
            </div>
            <div>
                <NavLink to='/some3' activeClassName={classes.activeLinc}>
                    <b>Some...3</b>
                </NavLink>
            </div>


        </nav>
    );
};

export default Nav;
