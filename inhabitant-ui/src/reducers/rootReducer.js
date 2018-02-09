import {combineReducers} from 'redux';
import spots from './spotReducer';

const rootReducer = combineReducers({
    spots
});

export default rootReducer;