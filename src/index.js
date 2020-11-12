import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './context';
import themeReducer from './reducer';
import App from './App';

const dark = {
  palette: {
    type: 'dark'
  }
};

const light = {
  palette: {
    type: 'light'
  }
};

const Index = () => {
  const [isDark, dispatch] = useReducer(themeReducer, false);

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ isDark, dispatch }}>
        <ThemeProvider theme={createMuiTheme(isDark ? dark : light)}>
          <App />
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
