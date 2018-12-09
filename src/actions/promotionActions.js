import * as actionTypes from '../constants/actionTypes';
import * as promotionApi from '../api/promotionApi';

export const getPromotion = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_PROMOTION_STARTED
    });

    promotionApi
        .getPromotion()
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
                        type: actionTypes.ACTION_GET_PROMOTION_FAILED,
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
                                type: actionTypes.ACTION_GET_PROMOTION_SUCCEEDED,
                                promotion : responseObject.data
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_PROMOTION_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};