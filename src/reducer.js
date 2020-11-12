const themeReducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return true;
    case 'LIGHT':
      return false;
    default:
      return state;
  }
};

export { themeReducer as default };
