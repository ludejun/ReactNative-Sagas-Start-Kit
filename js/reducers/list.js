import { types } from '../actions/list';

const initialState = {
  list: null,
  loading: false,
  selectedIndex: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_INDEX:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    case types.FETCH_LIST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.data
      };
    case types.FETCH_LIST_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
