import * as actionTypes from '../constants/user'

export const initialState = {
  isFetching: false,
  receivedAt: 0,
  phone: '',
  openid: '',
  check: false
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERCHECK_REQUEST_POST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.USERCHECK_RECEIVED:
      return {
        ...state,
        isFetching: false,
        receivedAt: action.receivedAt,
        phone: action.phone,
        time: action.time,
        check: true
      }
    case actionTypes.USERCHECK_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        receivedAt: 0,
        phone: '',
        check: false
      }
    default:
      return state
  }
}