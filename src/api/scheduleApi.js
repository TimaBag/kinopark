import {SERVER_URL} from '../constants/index';

const getScheduleUrl = SERVER_URL + "schedule";

export const getSchedule = () => {
    return fetch(
        getScheduleUrl+'?date_from=2018-05-26&date_to=2018-05-29',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
};

export const getScheduleFilter = (data) => {
    return fetch(
        getScheduleUrl+"?date_from=2018-05-26&date_to=2018-05-29&cinema="+data.cinema+"&city="+data.city+"&hall="+data.hall+"&movie="+data.movie+"&time="+data.time,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
};