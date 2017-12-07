export const types = {
  SET_INDEX: 'SET_INDEX',
  FETCH_LIST: 'FETCH_LIST',
  FETCH_LIST_SUCCESS: 'FETCH_LIST_SUCCESS',
  FETCH_LIST_FAIL: 'FETCH_LIST_FAIL'
};
export function setIndex(payload) {
  return {
    type: types.SET_INDEX,
    payload,
  };
}
export function fetchList(payload) {
  return {
    type: types.FETCH_LIST,
    payload,
  }
}