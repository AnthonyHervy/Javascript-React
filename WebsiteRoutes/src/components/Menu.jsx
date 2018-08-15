import React from 'react';
import { Link } from "react-router-dom";
import { Menu as SMenu  , Button, Input } from 'semantic-ui-react'

const Menu = ({ currentPath }) => (

      <SMenu stackable borderless size='huge' >
        <SMenu.Item>
          <img src="./img/logo.png" alt="Mushroom" />
        </SMenu.Item>

        <SMenu.Item
          color='red'
          active={currentPath === "/"}
          onClick={this.handleItemClick}
        >
          <Link to="/">Accueil</Link>
        </SMenu.Item>

        <SMenu.Item
          color='red'
          active={currentPath === "/participants"}
          onClick={this.handleItemClick}
        >
          <Link to="/participants">Participants</Link>
        </SMenu.Item>

        <SMenu.Item
          color='red'
          active={currentPath === "/classement"}
          onClick={this.handleItemClick}
        >
          <Link to="/classement">Classement</Link>
        </SMenu.Item>
        
        <SMenu.Menu position='right'>
          <SMenu.Item color='orange'>
            <Input icon='search' placeholder='Rechercher ...' />
          </SMenu.Item>
          <SMenu.Item>
            <Button basic color='green'>Se connecter</Button>
          </SMenu.Item>
        </SMenu.Menu>
      </SMenu>
    );
  

export default Menu;
