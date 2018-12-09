import * as actionTypes from '../constants/actionTypes';
import * as newsApi from '../api/newsApi';

export const getNews = () => (dispatch, getState) => {

  dispatch({
      type: actionTypes.ACTION_GET_NEWS_STARTED
  });

  newsApi
    .getNews()
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
              type: actionTypes.ACTION_GET_NEWS_FAILED,
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
                type: actionTypes.ACTION_GET_NEWS_SUCCEEDED,
                news : responseObject,
                newsPages : responseObject.last_page
              });
            }
          );
        }
      },
      error => {
        dispatch({
          type: actionTypes.ACTION_GET_NEWS_FAILED,
          errorMessage: "Не удалось подключиться к сети"
        })
      },
    );
};



export const getNewsById = (id) => (dispatch, getState) => {

  dispatch({
      type: actionTypes.ACTION_GET_NEWS_BY_ID_STARTED
  });

  newsApi
    .getNewsById(id)
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
              type: actionTypes.ACTION_GET_NEWS_BY_ID_FAILED,
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
                type: actionTypes.ACTION_GET_NEWS_BY_ID_SUCCEEDED,
                newsItem : responseObject
              });
            }
          );
        }
      },
      error => {
        dispatch({
          type: actionTypes.ACTION_GET_NEWS_BY_ID_FAILED,
          errorMessage: "Не удалось подключиться к сети"
        })
      },
    );
};