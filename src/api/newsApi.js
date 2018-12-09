import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getNewsUrl = SERVER_URL + "news";
const getNewsByIdUrl = SERVER_URL + "news/";

export const getNews = () => (
    fetch(
        getNewsUrl + "?per_page=15",
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);

export const getNewsById = (id) => (
    fetch(
        getNewsByIdUrl+id,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);