import * as types from './actionTypes';
import axios,{post} from 'axios';

const url = (endpoint = '') => {
    return `api.spotshit.com/${endpoint}`
};


export function toggleAdvancedDesignerVisibility() {
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_ADVANCED_DESIGNER_VISIBILITY",
        })
    }
}

export function simpleAction() {
    return dispatch => {
        dispatch({
            type: 'QUICKMATHS',
        })
    }
}

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

export function uploadSuccess({ data }) {
    return {
        type: 'UPLOAD_DOCUMENT_SUCCESS',
        payload: data,
    };
}

export function uploadFail(error) {
    return {
        type: 'UPLOAD_DOCUMENT_FAIL',
        payload: error,
    };
}

export function uploadDocumentRequest(file) {
    // let data = new FormData();
    // data.append('file', file);
    // data.append('name', name);

    let data = new FormData();
    data.append('file', file);
    console.log('data.......', data);

    return (dispatch) => {
        axios.post('https://cryptic-scrubland-95766.herokuapp.com/spotshit/upload', data)
            .then(response => dispatch(uploadSuccess(response)))
            .catch(error => dispatch(uploadFail(error)));
    };
}
uploadDocumentRequest2
export function uploadDocumentRequest2(data) {
    console.log("upload document request 2", data);
    return (dispatch) => {
        axios.post('https://cryptic-scrubland-95766.herokuapp.com/spotshit/upload', data)
            .then(response => dispatch(uploadSuccess(response)))
            .catch(error => dispatch(uploadFail(error)));
    };
}