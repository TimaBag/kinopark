import * as actionTypes from '../constants/actionTypes';
import * as hallApi from '../api/hallApi';

export const getHall = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_HALL_STARTED
    });

    hallApi
        .getHall()
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
                        type: actionTypes.ACTION_GET_HALL_FAILED,
                        errorMessage: "Что-то пошло не так :("
                    });
                  }
              } else {
                response
                    .text()
                    .then(
                        value => {
                            const responseObject = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_HALL_SUCCEEDED,
                                hall : responseObject.data
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_HALL_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};