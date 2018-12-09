import * as actionTypes from '../constants/actionTypes';
import * as cityApi from '../api/cityApi';

export const getCity = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_CITY_STARTED
    });

    cityApi
        .getCity()
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
                        type: actionTypes.ACTION_GET_CITY_FAILED,
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
                                type: actionTypes.ACTION_GET_CITY_SUCCEEDED,
                                city : responseObject.data
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_CITY_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};