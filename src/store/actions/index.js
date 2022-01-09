import { 
    createAsyncAction as asyncAction 
} from 'typesafe-actions';

export const getCoinList = asyncAction(
    'GET_COIN_LIST',
    'GET_COIN_LIST_SUCCESS',
    'GET_COIN_LIST_FAIL'
)();
