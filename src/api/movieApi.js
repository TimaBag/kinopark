import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getMovieUrl = SERVER_URL + "movie/today?";
const getMovieTomorrowUrl = SERVER_URL + "movie/today?";
const getMovieSoonUrl = SERVER_URL + "movie/soon?";
const getMovieShowUrl = SERVER_URL + "movie/";

export const getMovie = (page,date) => (
    fetch(
        getMovieUrl+"page="+page+"&per_page=15&date_from="+date,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);

export const getMovieWithCinema = (cinema,date) => (
    fetch(
        getMovieUrl+"cinema="+cinema+"&date_from=2018-12-09",
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);

export const getMovieTomorrow = (page,date) => (
    fetch(
        getMovieTomorrowUrl+"page="+page+"&per_page=15&date_from="+date,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);

export const getMovieSoon = (page) => (
    fetch(
        getMovieSoonUrl+"page="+page+"&per_page=15",
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);

export const getMovieShow = (movie) => (
    fetch(
        getMovieShowUrl+movie,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);