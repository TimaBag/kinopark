import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getHallUrl = SERVER_URL + "hall";

export const getHall = () => (
    fetch(
        getHallUrl,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);