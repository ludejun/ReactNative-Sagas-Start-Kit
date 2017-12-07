export const types = {
  OPEN_DRAWER: 'OPEN_DRAWER',
  CLOSE_DRAWER: 'CLOSE_DRAWER',
};
export function openDrawer() {
  return {
    type: types.OPEN_DRAWER,
  };
}
export function closeDrawer() {
  return {
    type: types.CLOSE_DRAWER,
  };
}
