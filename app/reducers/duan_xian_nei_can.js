import * as actionTypes from '../constants/duan_xian_nei_can';

export const initialState = {

}

export default function duan_xian_nei_can(state = initialState,action){
  switch (action.type){
    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching:true,
      }
    case actionTypes.RECEIVED:
      return {
        data:state.data.concat(action.data),
        receivedAt:action.receivedAt,
        isFetching:false,
      }
    case actionTypes.ERROR:
      return {
        ...state,
        isFetching:false
      }
    default:
      return state;
  }
}
