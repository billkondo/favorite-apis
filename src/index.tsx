import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'antd/dist/antd.css';

import UseCasesProvider from 'domain/usecases/UseCasesProvider';
import AuthenticationProvider from 'domain/authentication/AuthenticationProvider';
import FavoritedProvider from 'domain/favorited/FavoritedProvider';

import 'services/firebase';

import App from 'App';
import AppRouter from 'AppRouter';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UseCasesProvider>
      <AuthenticationProvider>
        <FavoritedProvider>
          <AppRouter>
            <App />
          </AppRouter>
        </FavoritedProvider>
      </AuthenticationProvider>
    </UseCasesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.onunhandledrejection = (error: PromiseRejectionEvent) => {
  // Use this part for logging/tracking errors
  console.error(error);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
