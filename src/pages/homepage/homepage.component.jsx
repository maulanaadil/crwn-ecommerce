import React, { Component } from "react";
import styled from "styled-components";

import Directory from "../../components/directory/directory.component.jsx";

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

class HomePage extends Component {
  render() {
    return (
      <HomepageContainer>
        <Directory />
      </HomepageContainer>
    );
  }
}

export default HomePage;
