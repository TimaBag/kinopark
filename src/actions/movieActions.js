import * as actionTypes from '../constants/actionTypes';
import * as movieApi from '../api/movieApi';

export const getMovie = (page,date) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_MOVIE_STARTED
    });

    movieApi
        .getMovie(page,date)
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
                        type: actionTypes.ACTION_GET_MOVIE_FAILED,
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
                                type: actionTypes.ACTION_GET_MOVIE_SUCCEEDED,
                                movie : responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_MOVIE_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};

export const getMovieTomorrow = (page,date) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_MOVIE_TOMORROW_STARTED
    });

    movieApi
        .getMovieTomorrow(page,date)
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
                        type: actionTypes.ACTION_GET_MOVIE_TOMORROW_FAILED,
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
                                type: actionTypes.ACTION_GET_MOVIE_TOMORROW_SUCCEEDED,
                                movie_tomorrow : responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_MOVIE_TOMORROW_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};

export const getMovieSoon = (page) => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_MOVIE_SOON_STARTED
    });

    movieApi
        .getMovieSoon(page)
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
                        type: actionTypes.ACTION_GET_MOVIE_SOON_FAILED,
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
                                type: actionTypes.ACTION_GET_MOVIE_SOON_SUCCEEDED,
                                movie_soon : responseObject
                            });
                        }
                    );
              }
            },
            error => {
                dispatch({
                    type: actionTypes.ACTION_GET_MOVIE_SOON_FAILED,
                    errorMessage: "Не удалось подключиться к сети"
                })
            },
        );
};