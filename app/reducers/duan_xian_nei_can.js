import * as actionTypes from '../constants/duan_xian_nei_can';

export const initialState = {
  isFetching:false,
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
        ...state,
        ...action.data,
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
