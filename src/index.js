import React from 'react';
import ReactDom from 'react-dom';

import Menuel from './menus';
import 'antd-mobile/dist/antd-mobile.css';
import './style.css';

class MenuExample extends React.Component {
  render() {
    return (
      <div>
          <Menuel url='http://api.quanfuxia.com/site/init?category=6' />
      </div>
    );
  }
}

ReactDom.render(<MenuExample />, document.getElementById('app'));
