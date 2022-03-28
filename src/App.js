import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";

import "./App.scss";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component";
import NotFound from "./pages/404/404.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  const unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </div>
  );
};

App.propTypes = {
  currentUser: PropTypes.any,
  checkUserSession: PropTypes.any,
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
  });

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
