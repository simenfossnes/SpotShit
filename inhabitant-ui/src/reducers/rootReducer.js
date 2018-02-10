import {combineReducers} from 'redux';
import spots from './spotReducer';
import file from './fileReducer';

const rootReducer = combineReducers({
    file,
    spots
});

export default rootReducer;