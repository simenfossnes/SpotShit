import initialState from './initialState';
import { UPDATE_FILE } from "../actions/actionTypes";

export default function stuff(state = initialState.file, action) {
    let newState;
    switch(action.type) {

        case UPDATE_FILE:
            newState = action.payload;
            console.log('UPDATE_FILE...');
            return newState;

        default:
            return state;
    }
}