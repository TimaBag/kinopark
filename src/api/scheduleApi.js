import {SERVER_URL, STD_HEADERS} from '../constants/index';

const getScheduleUrl = SERVER_URL + "schedule";

export const getSchedule = () => {
    return fetch(
        getScheduleUrl+'?date_from=2018-12-08&date_to=2018-12-09',
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
};

export const getScheduleFilter = (data) => {
    return fetch(
        getScheduleUrl+"?date_from=2018-12-08&date_to=2018-12-09&cinema="+data.cinema+"&city="+data.city+"&hall="+data.hall+"&movie="+data.movie+"&time="+data.time,
        {
            method: 'GET',
            headers: STD_HEADERS
        }
    )
};