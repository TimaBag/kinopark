import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getCinemaUrl = SERVER_URL + "cinema";

export const getCinema = () => (
    fetch(
        getCinemaUrl,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);

export const getCinemaShow = (cinema) => (
    fetch(
        getCinemaUrl+"/"+cinema,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);

export const getCinemaWithCity = (city) => (
    fetch(
        getCinemaUrl+"?city="+city,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);