import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getPromotionUrl = SERVER_URL + "promotion?";

export const getPromotion = () => (
    fetch(
        getPromotionUrl,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
);