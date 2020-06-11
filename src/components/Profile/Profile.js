import React from 'react';
import classes from './Profile.module.css'

const Profile = props => {
    return (
        <div className={classes.profile}>
            <h3>USER PROFILE</h3>
            <div >
                <img src="https://d2ykdu8745rm9t.cloudfront.net/cover/i/001/482/875/nicolas-cage-will-be-in-the-expendables-3-7605.jpg?rect=89,0,536,536&amp;q=98&amp;fm=jpg&amp;fit=max" alt=""/>
                <table>
                    <tbody>
                        <tr>
                            <th><b>Name: </b></th>
                            <th>{props.profile.name}</th>
                        </tr>
                        <tr>
                            <th><b>Username: </b></th>
                            <th>{props.profile.username}</th>
                        </tr>
                        <tr>
                            <th><b>Phone: </b></th>
                            <th>{props.profile.phone}</th>
                        </tr>
                        <tr>
                            <th><b>Website: </b></th>
                            <th>{props.profile.website}</th>
                        </tr>
                        <tr>
                            <th><b>Email: </b></th>
                            <th>{props.profile.email}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile