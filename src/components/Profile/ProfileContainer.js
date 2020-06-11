import React, {Component} from 'react';
import * as axios from "axios";
import {profileIsError, profileIsLoading, setProfileAC} from "../../reducers/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import Spinner from "../Spinner/Spinner";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.toggleIsLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                this.props.setProfile(response.data);
                this.props.toggleIsLoading(false)
            })
            .catch(() => {
                this.props.toggleIsLoading(false);
                this.props.toggleIsError(true)
            })
    }

    render() {
        if (this.props.profileIsLoading) {
            return <Spinner/>
        }
        if (this.props.profileIsError) {
            return <h2 style={{color: 'red'}}>Some Error...</h2>
        }
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        profileIsLoading: state.profilePage.isLoading,
        profileIsError: state.profilePage.isError
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setProfile: profile => {
            dispatch(setProfileAC(profile))
        },
        toggleIsLoading: isLoading => {
            dispatch(profileIsLoading(isLoading))
        },
        toggleIsError: isError => {
            dispatch(profileIsError(isError))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));