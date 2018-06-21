import {SERVER_URL} from '../constants/index';

const getScheduleUrl = SERVER_URL + "schedule";

export const getSchedule = () => (
    fetch(
        getScheduleUrl+'?date_from=2018-05-26&date_to=2018-05-29&city=eab496b2-c874-47de-a246-ea2584e59fb7',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
);