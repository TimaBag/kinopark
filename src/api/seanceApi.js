import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getSeanceUrl = SERVER_URL + "seance/";

export const getSeance = (uuid) => (
    fetch(
        getSeanceUrl+uuid,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);