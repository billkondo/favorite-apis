import { Route, Switch } from 'react-router-dom';

import Routes from 'config/routes';

import ApisPage from 'pages/apis/ApisPage';
import FavoritesPage from 'pages/favorites/FavoritesPage';
import LoginPage from 'pages/login/LoginPage';
import RegisterPage from 'pages/register/RegisterPage';
import LogoutPage from 'pages/logout/LogoutPage';
import NotFoundPage from 'pages/NotFoundPage';

import AppLayout from 'AppLayout';

const App = () => {
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
