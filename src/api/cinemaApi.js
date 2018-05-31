import {SERVER_URL} from '../constants/index';

const getCinemaUrl = SERVER_URL + "cinema";

export const getCinema = () => (
    fetch(
        getCinemaUrl,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);