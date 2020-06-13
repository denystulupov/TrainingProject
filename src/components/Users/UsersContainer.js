import React, {Component} from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC, toggleIsErrorAC, toggleIsLoadingAC} from "../../reducers/users-reducer";
import * as axios from "axios";
import Spinner from "../Spinner/Spinner";

class UsersContainer extends Component {

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                this.props.setUsers(response.data)
            })
            .catch(() => {
                this.props.toggleIsError(true);
                }
            )
    }

    componentWillUnmount() {
        this.props.toggleIsLoading(true)
    }

    render() {
        if(this.props.isLoading) {
            return <Spinner/>
        }

        if(this.props.isError) {
            return <h2 style={{color: 'red'}}>Some Error...</h2>
        }

        return (
            <Users
                users={this.props.users}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isLoading: state.usersPage.isLoading,
        isError: state.usersPage.isError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        toggleIsLoading: (isLoading) => {
            dispatch(toggleIsLoadingAC(isLoading))
        },
        toggleIsError: (isError) => {
            dispatch(toggleIsErrorAC(isError))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);