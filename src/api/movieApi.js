import {SERVER_URL} from '../constants/index';

const getMovieUrl = SERVER_URL + "movie";

export const getMovie = () => (
    fetch(
        getMovieUrl+"?page=1",
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);