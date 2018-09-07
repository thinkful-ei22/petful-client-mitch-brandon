import { BASE_URL } from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});
export const fetchCat = () => dispatch => {
  return fetch(`${BASE_URL}/cats`)
    .then(res => {
      if (!res.ok) {
        if (res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
          return Promise.reject(res.json());
        }
        return Promise.reject({ code: res.status, message: res.statusText});
      }
      return res.json();
    })
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(error => dispatch(fetchCatError(error)));
};

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});
export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = cat => ({
  type: ADOPT_CAT_SUCCESS,
  cat
});
export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
  type: ADOPT_CAT_ERROR,
  error
});
export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  return fetch(`${BASE_URL}/cats`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        if (res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
          return Promise.reject(res.json());
        }
        return Promise.reject({ code: res.status, message: res.statusText });
      }
      return res.json();
    })
    .then(cat => dispatch(adoptCatSuccess(cat)))
    .then(() => dispatch(fetchCat()))
    .catch(error => dispatch(adoptCatError(error)));
};