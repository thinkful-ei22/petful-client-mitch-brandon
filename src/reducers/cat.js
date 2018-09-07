import types from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
  case(types.FETCH_CAT_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.FETCH_CAT_SUCCESS):
    return Object.assign({}, state, {
      data: action.cat,
      error: null,
      loading: false,
    });
  case(types.FETCH_CAT_ERROR):
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  default:
    return state;
  }
};