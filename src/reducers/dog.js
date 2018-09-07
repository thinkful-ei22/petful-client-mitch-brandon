import types from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
  case(types.FETCH_DOG_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.FETCH_DOG_SUCCESS):
    return Object.assign({}, state, {
      data: action.dog,
      error: null,
      loading: false,
    });
  case(types.FETCH_DOG_ERROR):
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  default:
    return state;
  }
};