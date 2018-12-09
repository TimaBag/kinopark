import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getCityUrl = SERVER_URL + "city";

export const getCity = () => (
    fetch(
        getCityUrl,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);