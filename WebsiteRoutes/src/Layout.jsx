import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Menu from "./components/Menu";
import Footer from "./components/Footer";

const Layout = ({ component: Component, ...rest }) => {
  const { path } = rest;
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <Menu currentPath={path} />

          <Container>
            <Component {...matchProps} />
          </Container>

          <Footer />
        </div>
      )}
    />
  );
};
export default Layout;
