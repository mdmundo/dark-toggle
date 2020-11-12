import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './context';
import themeReducer, { lightTheme } from './reducer';
import App from './App';

const Index = () => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, dispatch }}>
        <ThemeProvider theme={theme}>
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
