import {
    FETCH_RANDOM_USERS_BEGIN,
    FETCH_RANDOM_USERS_SUCCESS,
    FETCH_RANDOM_USERS_FAILURE
} from "../action-types";

const DEFAULT_RANDOM_USERS_STATE = {
    users: {},
    fetchInProgress: false,
    err: null
};

/**
 * @function ramdomUsers
 * @desc Reducer: Given an initial state and an action object,
 *   it should generate a new state object based on
 *   the action, or return the existing state.
 * */

export function ramdomUsers(prevState = DEFAULT_RANDOM_USERS_STATE, action) {
    switch (action.type) {
        case FETCH_RANDOM_USERS_BEGIN:
            return {
                ...DEFAULT_RANDOM_USERS_STATE,
                fetchInProgress: true,
                err: null
            };
        case FETCH_RANDOM_USERS_SUCCESS:
            return {
                fetchInProgress: false,
                err: null,
                users: action.users
            };
        case FETCH_RANDOM_USERS_FAILURE:
            return {
                fetchInProgress: false,
                err: action.err,
                users: {},
            };
    }
}
