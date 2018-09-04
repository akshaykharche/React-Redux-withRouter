import * as actionTypes from '../constants';

let initialState = {
    loading: true
};

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REQUEST_LOADING:
            return state;
        case actionTypes.REQUEST_FAILED:
            return state;
        case actionTypes.REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            };
        default: return state;
    }
}

