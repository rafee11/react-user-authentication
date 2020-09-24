import React, { useMemo } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import RouteEnum from '../../constants/RouteEnum';

import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import { OnBoardLayout } from '../layout';

import { SignInPage, SignUpPage } from '../pages';

const mainRoutes = [
  {
    path: [RouteEnum.SignIn, RouteEnum.Home],
    exact: true,
    component: SignInPage,
    wrapper: OnBoardLayout,
  },
  {
    path: RouteEnum.SignUp,
    exact: false,
    component: SignUpPage,
    wrapper: OnBoardLayout,
  },
];

const Routes = ({ history }) => {
  const routes = useMemo(
    () =>
      mainRoutes.map(({ path, exact = false, component: Component, wrapper: Wrapper }) => {
        if (Wrapper) {
          return (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={() => (
                <Wrapper>
                  <Component />
                </Wrapper>
              )}
            />
          );
        }
        return <Route key={path} path={path} exact={exact} component={Component} />;
      }),
    []
  );

  return (
    <Router history={history}>
      <ScrollToTop />
      <Switch>{routes}</Switch>
    </Router>
  );
};

export default Routes;
