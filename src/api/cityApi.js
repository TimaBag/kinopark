import {SERVER_URL} from '../constants/index';

const getCityUrl = SERVER_URL + "city";

export const getCity = () => (
    fetch(
        getCityUrl,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);