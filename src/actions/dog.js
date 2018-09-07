import { BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
});
export const fetchDog = () => dispatch => {
  return fetch(`${BASE_URL}/dogs`)
    .then(res => {
      if (!res.ok) {
        if (res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
          return Promise.reject(res.json());
        }
        return Promise.reject({ code: res.status, message: res.statusText});
      }
      return res.json();
    })
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(error => dispatch(fetchDogError(error)));
};

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
});
export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = dog => ({
  type: ADOPT_DOG_SUCCESS,
  dog
});
export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
  type: ADOPT_DOG_ERROR,
  error
});
export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  return fetch(`${BASE_URL}/dogs`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        if (res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
          return Promise.reject(res.json());
        }
        return Promise.reject({ code: res.status, message: res.statusText });
      }
      return res.json();
    })
    .then(dog => dispatch(adoptDogSuccess(dog)))
    .then(() => dispatch(fetchDog()))
    .catch(error => dispatch(adoptDogError(error)));
};