import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { createActiontypes } from '../utils/action';


// handle all things related to Users
const ACTIONS = createActiontypes([
    'GET_PICS',
])

const INITIAL_STATE = {
    pics: {},
};

export default (state = INITIAL_STATE, action) => {
    const {
        payload
    } = action;

    switch (action.type) {
        case ACTIONS.GET_PICS:
            return {
                pics: payload,
            };
        default:
            return state;

    }
}

export const getPics = () => {
    return (dispatch) => {
        firebase.database().ref(`/pics/`).on('value', snapshot => {
            dispatch({
                type: ACTIONS.GET_PICS,
                payload: snapshot.val()
        })
})
}
}


