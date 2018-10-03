import {SERVER_URL} from '../constants/index';

const getSeanceUrl = SERVER_URL + "seance/";

export const getSeance = (uuid) => (
    fetch(
        getSeanceUrl+uuid,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);