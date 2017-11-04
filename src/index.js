import React from 'react';
import ReactDom from 'react-dom';

import { Menu, ActivityIndicator, NavBar, Icon } from 'antd-mobile';
import Menuel from './menus';
import 'antd-mobile/dist/antd-mobile.css';
import './style.css';

class MenuExample extends React.Component {
  render() {
    return (
      <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            leftContent="猩便利"
            rightContent={[
                <Icon key="1" type="ellipsis" style={{ color: '#fc0' }} />,
            ]}
          >
            猩便利
          </NavBar>
          <Menuel />
      </div>
    );
  }
}

ReactDom.render(<MenuExample />, document.getElementById('app'));
