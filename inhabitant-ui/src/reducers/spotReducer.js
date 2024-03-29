import initialState from './initialState';
import { FETCH_SPOTS, GET_SPOTS } from "../actions/actionTypes";

export default function stuff(state = initialState.spots, action) {
    let newState;
    switch(action.type) {

        case FETCH_SPOTS:
            console.log('FETCH_SPOTS...');
            return action;

        case GET_SPOTS:
            newState = action.payload;
            console.log("GET_SPOTS...");
            return newState;

        case 'UPLOAD_DOCUMENT_SUCCESS':
            console.log("before upload payload");
            console.log(action.payload);
            console.log("after upload payload");
            break;

        case 'UPLOAD_DOCUMENT_ERROR':
            console.log("before upload payload");
            console.log(action.payload);
            console.log("after upload payload");
            break;

        default:
            return state;
    }
}