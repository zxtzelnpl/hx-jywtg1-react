import * as actionTypes from '../constants/duan_xian_nei_can';
import {duan_xian_nei_can as URL} from '../constants/urls';
import moment from 'moment';

const requestPosts = () => ({
  type: actionTypes.REQUEST
})

const received = (data) =>({
  type: actionTypes.RECEIVED,
  receivedAt:moment().format('X'),
  data
})

const receivedError = () => ({
  type:actionTypes.ERROR
})

const fetchPosts = value => dispatch => {
  dispatch(requestPosts())
  let url = `${URL}?name=zxt`;

  return fetch(url)
      .then(response => response.json())
      .then(json => {
        if(typeof json !=='undefined'){
          dispatch(received(json.data))
        }
        else{
          console.log(json)
          dispatch(receivedError())
        }
      })
      .catch(err=>{
        console.log(err)
        dispatch(receivedError())
      })
}

const shouldFetchPosts = (state) => {
  return !state.isFetching;
}

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPosts(getState().duan_xian_nei_can)) {
    return dispatch(fetchPosts(getState().duan_xian_nei_can))
  }
}
