import * as actionTypes from '../constants/actionTypes';
import * as seanceApi from '../api/seanceApi';

export const getSeance = (uuid) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_SEANCE_STARTED
    });

    seanceApi
        .getSeance(uuid)
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
                        type: actionTypes.ACTION_GET_SEANCE_FAILED,
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
                                type: actionTypes.ACTION_GET_SEANCE_SUCCEEDED,
                                seance : responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_SEANCE_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};