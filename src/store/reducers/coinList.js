import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  coins: initEntityState(null),
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    case getType(actions.getCoinList.request):
      return { ...state, coins: entityLoadingStarted(state.coins, action.payload) };
    case getType(actions.getCoinList.success):
      console.log("reducer - actions.getCoinList.success");
      return { ...state, coins: entityLoadingSucceeded(state.coins, action.payload) };
    case getType(actions.getCoinList.failure):
      return { ...state, coins: entityLoadingFailed(state.coins) };

    default:
      return state;
  }
};

export default states;
