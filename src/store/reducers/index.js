import { combineReducers } from 'redux';
import coinListReducer from './coinList';

export const rootReducer = combineReducers({
  coinList: coinListReducer
});

const reducers = (state, action) => rootReducer(state, action);

export default reducers;