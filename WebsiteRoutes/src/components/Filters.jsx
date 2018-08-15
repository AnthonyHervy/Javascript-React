import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const Filters = () => (
  <Menu inverted>
    <Container>
      <Menu.Item>
        <Link to="/participants/by/pseudo">Trier par nom</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/participants/by/nbreWins">Trier par victoire</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/participants">Reset</Link>
      </Menu.Item>
    </Container>
  </Menu>
);

export default Filters;
