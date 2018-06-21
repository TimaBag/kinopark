import {SERVER_URL} from '../constants/index';

const getMovieUrl = SERVER_URL + "movie/today?";
const getMovieTomorrowUrl = SERVER_URL + "movie/today?";
const getMovieSoonUrl = SERVER_URL + "movie/soon?";

export const getMovie = (page,date) => (
    fetch(
        getMovieUrl+"page="+page+"&per_page=15&date_from=2018-05-21",
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);

export const getMovieTomorrow = (page,date) => (
    fetch(
        getMovieTomorrowUrl+"page="+page+"&per_page=15&date_from=2018-05-21",
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);

export const getMovieSoon = (page) => (
    fetch(
        getMovieSoonUrl+"page="+page+"&per_page=15",
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);