import {combineReducers} from 'redux';
import {catReducer} from './cat';
import {dogReducer} from './dog';

export const indexReducer = combineReducers({
  catReducer: catReducer, dogReducer: dogReducer
});