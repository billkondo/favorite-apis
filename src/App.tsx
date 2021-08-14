import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { notification } from 'antd';

import Routes from 'config/routes';
import { LOCAL } from 'config/environment';

import ApisPage from 'pages/apis/ApisPage';
import FavoritesPage from 'pages/favorites/FavoritesPage';
import LoginPage from 'pages/login/LoginPage';
import RegisterPage from 'pages/register/RegisterPage';
import LogoutPage from 'pages/logout/LogoutPage';
import NotFoundPage from 'pages/NotFoundPage';

import AppLayout from 'AppLayout';

const App = () => {
  useEffect(() => {
    if (LOCAL)
      notification.warn({
        message: 'Local development',
        description: 'All data will be saved in LocalStorage',
        duration: 0,
      });
  }, []);

  return (
    <AppLayout>
      <Switch>
        <Route path={Routes.FAVORITES} exact>
          <FavoritesPage></FavoritesPage>
        </Route>

        <Route path={Routes.HOME} exact>
          <ApisPage></ApisPage>
        </Route>

        <Route path={Routes.LOGIN} exact>
          <LoginPage></LoginPage>
        </Route>

        <Route path={Routes.REGISTER} exact>
          <RegisterPage></RegisterPage>
        </Route>

        <Route path={Routes.LOGOUT} exact>
          <LogoutPage></LogoutPage>
        </Route>

        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default App;
