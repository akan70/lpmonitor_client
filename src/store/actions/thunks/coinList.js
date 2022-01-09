import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';
import api from '../../../core/api';


export const coinList = (page_num, count_per_page) => async (dispatch) => {
  console.log("called coinList2");
  console.log(count_per_page);
  dispatch(actions.getCoinList.request(Canceler.cancel));
  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.getCoinList}`, {
      params: {page_num : page_num, count_per_page : count_per_page}
    });
    console.log("action - success", data);
    dispatch(actions.getCoinList.success(data));
  } catch (err) {
    dispatch(actions.getCoinList.failure(err));
  }
};
