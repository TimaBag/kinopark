import {SERVER_URL} from '../constants/index';

const getNewsUrl = SERVER_URL + "news";
const getNewsByIdUrl = SERVER_URL + "news/";

export const getNews = () => (
    fetch(
        getNewsUrl + "?per_page=15",
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);

export const getNewsById = (id) => (
    fetch(
        getNewsByIdUrl+id,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);