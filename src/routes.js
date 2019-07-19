import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './containers/home/Home';
import Header from './containers/header/Header';
import Profile from './containers/profile/Profile';
import PasswordReset from './containers/resetpassword/resetPassword';
import ConfrimReset from './containers/resetpassword/resetConfirm';
import CreateNewArticle from './containers/articles/NewArticle';
import SingleArticleContainer from './containers/articles/SingleArticle';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resetconfirm/:token" component={ConfrimReset} />
        <Route exact path="/passwordreset" component={PasswordReset} />
        <Route path="/profile" exact component={Profile} />
        <Route
          path="/articles/new"
          exact
          render={props => <CreateNewArticle {...props} create />}
        />
        <Route
          path="/articles/update"
          exact
          render={props => <CreateNewArticle {...props} create={false} />}
        />
        <Route path="/articles/:slug" exact component={SingleArticleContainer} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
