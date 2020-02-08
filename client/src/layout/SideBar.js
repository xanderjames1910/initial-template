import React, { useState } from 'react';
import { Feed, Image, Menu, Sidebar, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

import MenuBar from './MenuBar';
import Inicio from '../pages/Inicio';
import SideMenu from './SideMenu';

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  const sideBarToggle = () => {
    !visible ? setVisible(true) : setVisible(false);
  };

  return (
    <Sidebar.Pushable>
      <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible={visible} width='thin'>
        <SideMenu />
      </Sidebar>
      <Sidebar.Pusher className={!visible ? '' : 'pusher-width-toggled'}>
        <Menu pointing color='blue' fixed='top'>
          {/* <Menu.Item icon='bars' onClick={sideBarToggle} /> */}
          <Menu.Item icon='bars' />
          <MenuBar sideBarToggle={sideBarToggle} />
        </Menu>
        <Container style={{ paddingTop: '4em' }}>
          <Router>
            <Switch>
              <Route exact path='/inicio' component={Inicio} />
            </Switch>
          </Router>
        </Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default SideBar;
