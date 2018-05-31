import * as actionTypes from '../constants/actionTypes';
import * as cinemaApi from '../api/cinemaApi';

export const getCinema = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_CINEMA_STARTED
    });

    cinemaApi
        .getCinema()
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
                        type: actionTypes.ACTION_GET_CINEMA_FAILED,
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
                                type: actionTypes.ACTION_GET_CINEMA_SUCCEEDED,
                                cinema : responseObject.data
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_CINEMA_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};