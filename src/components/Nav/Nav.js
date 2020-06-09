import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <h2>Navigation</h2>
            <div>
                <NavLink to='/picture' activeClassName={classes.activeLinc}>
                    <b>Picture</b>
                </NavLink>
            </div>
            <div>
                <NavLink to='/counter' activeClassName={classes.activeLinc}>
                    <b>Counter</b>
                </NavLink>
            </div>
            <div>
                <NavLink to='/posts' activeClassName={classes.activeLinc}>
                    <b>Posts</b>
                </NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={classes.activeLinc}>
                    <b>Users(JSONPlaceholder)</b>
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
