export const types = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};
export function setUser(payload) {
  return {
    type: types.LOGIN,
    payload,
  };
}
