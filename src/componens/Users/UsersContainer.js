import { connect } from "react-redux";
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersAC, setIsFetchingAC, setIsNotFetchingAC} from '../../redux/reducer-users';
import axios from 'axios';
import React from 'react';
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersClass extends React.Component {
    componentDidMount =()=> {
        this.props.setIsFetchingPage(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetchingPage(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalPage(response.data.totalCount);
        })        
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetchingPage(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetchingPage(false);
            this.props.setUsers(response.data.items);
        })
    }
    render () {
        return (
        <>
        {this.props.isFetching && <Preloader />}
        <Users
        currentPage= {this.props.currentPage}
        totalUsers= {this.props.totalUsers}
        pageSize= {this.props.pageSize}
        unFollow= {this.props.unFollow}
        follow= {this.props.follow}
        users= {this.props.users}
        onPageChanged= {this.onPageChanged}
        />
        </>
    )
}

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalPage: (totalUsers) => {
            dispatch(setTotalUsersAC(totalUsers))
        },
        setIsFetchingPage: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;