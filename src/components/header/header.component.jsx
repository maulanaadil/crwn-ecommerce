import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { signOutStart } from "../../redux/user/user.actions";

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(NavLink)`
  height: auto;
  width: 70px;
  padding: 10px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
  &.active {
    color: #696969;
  }
`;

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/404">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.any,
  hidden: PropTypes.any,
  signOutStart: PropTypes.any,
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
