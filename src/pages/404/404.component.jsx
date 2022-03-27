import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../../components/button/button.component";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  height: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
`;

const NotFound = ({ history }) => (
  <NotFoundContainer>
    <Title>404</Title>
    <SubTitle>Not Found</SubTitle>
    <Button type="button" onClick={() => history.push("/")}>
      Go To Homepage
    </Button>
  </NotFoundContainer>
);

NotFound.propTypes = {
  history: PropTypes.any,
};

export default withRouter(NotFound);
