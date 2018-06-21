import {SERVER_URL} from '../constants/index';

const getPromotionUrl = SERVER_URL + "promotion?";

export const getPromotion = () => (
    fetch(
        getPromotionUrl,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);