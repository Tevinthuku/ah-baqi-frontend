import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './containers/home/Home';
import Header from './containers/header/Header';
import Profile from './containers/profile/Profile';
import PasswordReset from './containers/resetpassword/resetPassword';
import ConfrimReset from './containers/resetpassword/resetConfirm';
import SingleArticle from './components/articles/SingleArticle'

const Routes = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resetconfirm/:token" component={ConfrimReset} />
        <Route exact path="/passwordreset" component={PasswordReset} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/test" exact component={SingleArticle} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
