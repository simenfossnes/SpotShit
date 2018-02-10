import * as types from './actionTypes';
import axios,{post} from 'axios';

const url = (endpoint = '') => {
    return `api.spotshit.com/${endpoint}`
};

export const updateFile = (file) => {
    return dispatch => {
        dispatch({
            type: types.UPDATE_FILE,
            payload: file
        });
    }
};

export const getSpots = (json) => {
    return {type: types.GET_SPOTS, payload: json.spots};
};

export const fetchSpots = () => {
    console.log('fetching spots');
    return dispatch => {
        axios.get('https://cryptic-scrubland-95766.herokuapp.com/spotshit/dummy')
            .then(function (response) {
                console.log(response);
                dispatch(getSpots(response));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const postSpot = (file) => {
    return dispatch => {
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log(formData, config);
        return post(url(), formData, config)
            .then(response => response.json)
            .then(json => dispatch(getSpots(json)));
    }
};
