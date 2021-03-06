import * as actionTypes from '../constants/news'

export const initialState = {
  isFetching: false,
  receivedAt:0,
  data: []
}

export default function news(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NEWS_REQUEST_JSONP:
      return {
        ...state,
        isFetching:true
      }
    case actionTypes.NEWS_RECEIVED:
      return {
        data:state.data.concat(action.data),
        receivedAt:action.receivedAt,
        isFetching:false
      }
    case actionTypes.NEWS_ERROR:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}