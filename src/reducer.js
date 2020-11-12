import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme();
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return darkTheme;
    case 'LIGHT':
      return lightTheme;
    default:
      return state;
  }
};

export { themeReducer as default, lightTheme };
