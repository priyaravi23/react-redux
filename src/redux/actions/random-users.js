import {
    FETCH_RANDOM_USERS_BEGIN,
    FETCH_RANDOM_USERS_SUCCESS,
    FETCH_RANDOM_USERS_FAILURE
} from "../action-types";

import store from '../store';
import { RANDOM_USERS_URL } from "../../utils/constants";

export const fetchRandomUsersStart = () => {
    return {
        type: FETCH_RANDOM_USERS_BEGIN
    };
};

export const fetchRandomUsersSuccess = (users) => {
    return {
        type: FETCH_RANDOM_USERS_SUCCESS,
        users
    };
};

export const fetchRandomUsersFailure = (err) => {
    return {
        type: FETCH_RANDOM_USERS_FAILURE,
        err
    };
};

/**
 * @desc This is a redux action which is written using the Thunk format
 * */

export const fetchRandomUsers = () => {
    return (dispatch) => {
        dispatch(fetchRandomUsersStart());

        fetch(RANDOM_USERS_URL)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(fetchRandomUsersSuccess(data));
                    });
                } else {
                    dispatch(fetchRandomUsersFailure(response));
                }
            }, err => {
                dispatch(fetchRandomUsersFailure(err));
            }).catch(err => {
            dispatch(fetchRandomUsersFailure(err));
        });
    };
};

export const dispatchfetchRandomUsers = () => {
    return store.dispatch(fetchRandomUsers())
};
