import initialState from './initialState';
import { UPDATE_FILE, UPDATE_FILE_AND_IMAGE_PREVIEW, UPDATE_TAGLINE } from "../actions/actionTypes";

export default function stuff(state = initialState.file, action) {
    let newState;
    switch(action.type) {

        case UPDATE_FILE_AND_IMAGE_PREVIEW:
            state = {...state,
                file: action.payload.file,
                imagePreviewUrl: action.payload.imagePreviewUrl
            };
            break;

        case UPDATE_FILE:
            newState = action.payload;
            console.log('UPDATE_FILE...');
            return newState;

        case UPDATE_TAGLINE:
            state = {...state, tagline: action.payload};
            break;

        default:
            break;
    }
    return state;
}