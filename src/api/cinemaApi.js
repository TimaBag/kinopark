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

export const getCinemaShow = (cinema) => (
    fetch(
        getCinemaUrl+"/"+cinema,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);

export const getCinemaWithCity = (city) => (
    fetch(
        getCinemaUrl+"?city="+city,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);