import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Users.module.css'

const Users = props => {

    const users = props.users.map(user => {
            return (
                <div key={user.id} className={classes.users}>
                    <NavLink to={`/profile/${user.id}`}>
                        {user.name}
                    </NavLink>
                </div>
            )
        }
    );

    return (
        <div>
            {users}
        </div>
    );
};

export default Users