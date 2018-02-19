import * as actionTypes from '../actions/actions';

const initialState = {
    currentPassword: "12345"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PASSWORD:
            let newState = Object.assign({}, state);
            newState.currentPassword = action.newPassword;
            return newState;

        default:
            newState = Object.assign({}, state);
            return newState;
    }
};

export default reducer;