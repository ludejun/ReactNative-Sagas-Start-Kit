import { types } from '../actions/user';

const initialState = {
  name: '',
  info: ''
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        info: '',
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        info: action.info
      };
    default:
      return state;
  }
}
