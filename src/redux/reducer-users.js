const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

let initialState = {
    users: [],
    pageSize: 25,
    totalUsers: 0,
    currentPage: 4,
    isFetching: false
};

const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        default:
            return state;
    }
}

export const followAC = (userID) => {
    return { type: FOLLOW, userID }
}

export const unFollowAC = (userID) => {
    return { type: UN_FOLLOW, userID }
}

export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPageAC = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

export const setTotalUsersAC = (totalUsers) => {
    return { type: SET_TOTAL_USERS, totalUsers }
}

export const setIsFetchingAC = (isFetching) => {
    return { type: SET_IS_FETCHING, isFetching}
}

export default reducerUsers;