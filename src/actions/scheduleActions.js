import * as actionTypes from '../constants/actionTypes';
import * as scheduleApi from '../api/scheduleApi';

export const getSchedule = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_SCHEDULE_STARTED
    });

    scheduleApi
        .getSchedule()
        .then(
            response => {
              if (response.status !== 200) {
                  if (response.status === 403) {
                    dispatch({
                        type: actionTypes.ACTION_LOGGED_OUT
                    });
                  } else {
                    console.log("error", response);
                    dispatch({
                        type: actionTypes.ACTION_GET_SCHEDULE_FAILED,
                        errorMessage: "Что-то пошло не так :("
                    });
                  }
              } else {
                response
                    .text()
                    .then(
                        value => {
                            const responseObject = JSON.parse(value);
                            console.log(responseObject);
                            dispatch({
                                type: actionTypes.ACTION_GET_SCHEDULE_SUCCEEDED,
                                schedule : responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_SCHEDULE_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};

export const getScheduleFilter = (data) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_SCHEDULE_FILTER_STARTED
    });

    scheduleApi
        .getScheduleFilter(data)
        .then(
            response => {
              if (response.status !== 200) {
                  if (response.status === 403) {
                    dispatch({
                        type: actionTypes.ACTION_LOGGED_OUT
                    });
                  } else {
                    console.log("error", response);
                    dispatch({
                        type: actionTypes.ACTION_GET_SCHEDULE_FILTER_FAILED,
                        errorMessage: "Что-то пошло не так :("
                    });
                  }
              } else {
                response
                    .text()
                    .then(
                        value => {
                            const responseObject = JSON.parse(value);
                            console.log(responseObject);
                            dispatch({
                                type: actionTypes.ACTION_GET_SCHEDULE_FILTER_SUCCEEDED,
                                schedule : responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_SCHEDULE_FILTER_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};