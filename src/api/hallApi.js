import {SERVER_URL} from '../constants/index';

const getHallUrl = SERVER_URL + "hall";

export const getHall = () => (
    fetch(
        getHallUrl,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);