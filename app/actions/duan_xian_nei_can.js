import * as actionTypes from '../constants/duan_xian_nei_can';
import {duan_xian_nei_can as URL} from '../constants/urls';

const requestPosts = () => ({
  type: actionTypes.REQUEST
})

const received = (Shortid, data) => {

  let action = {
    type: actionTypes.RECEIVED,
  }
  switch(Shortid){
    case 1:
      action.data = {
        shortId1:data
      };
      break;
    case 2:
      action.data = {
        shortId2:data
      };
      break;
    case 3:
      action.data = {
        shortId3:data
      };
      break;
    default:
  }

  return action;
}

const receivedError = () => ({
  type: actionTypes.ERROR
})

const fetchPosts = shortid => dispatch => {
  dispatch(requestPosts())
  let url = `${URL}${shortid}`;
  // let url = 'http://public.mztzzx.com/success.json';
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      if (json.error !== '0') {
        dispatch(received(shortid, json))
      }
      else {
        console.log(json)
        dispatch(receivedError())
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(receivedError())
    })
}

const shouldFetchPosts = (state) => {
  return !state.isFetching;
}

export const fetchPostsIfNeeded = Shortid => (dispatch, getState) => {
  if (true) {
    return dispatch(fetchPosts(Shortid))
  }
}
