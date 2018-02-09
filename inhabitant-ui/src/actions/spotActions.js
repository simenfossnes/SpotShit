import * as types from './actionTypes';

function url() {
    return 'api.spotshit.com'
}

export function getSpots(json) {
    return {type: types.GET_SPOTS, spots: json.spots};
}

export function fetchSpots() {
    return dispatch => {
        return fetch(url(), {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => dispatch(getSpots(json)))
    }
}