import React from 'react';
import ReactDom from 'react-dom';

import { Menu, ActivityIndicator, NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './style.css';

const data = [
  {
    value: '1',
    label: '双十一狂欢',
    children: [
      {
        label: '卫龙大面筋',
        value: '1',
      },
      {
        label: '乐事烧烤味',
        value: '2',
      }, {
        label: '紫葡萄味',
        value: '3',
      }, {
        label: '威化饼干',
        value: '4',
      }, {
        label: '好巴食麻辣豆干',
        value: '5',
      }, {
        label: '经典原味薯片',
        value: '6',
      }, {
        label: '乐事红薯味',
        value: '7',
      }, {
        label: '乐事红烩味',
        value: '8',
      }, {
        label: '乐事黄瓜味',
        value: '9',
      }, {
        label: '夹心巧克力',
        value: '10',
      },
      {
        label: '卫龙大面筋',
        value: '1',
      },
      {
        label: '乐事烧烤味',
        value: '2',
      }, {
        label: '紫葡萄味',
        value: '3',
      }, {
        label: '威化饼干',
        value: '4',
      }, {
        label: '好巴食麻辣豆干',
        value: '5',
      }, {
        label: '经典原味薯片',
        value: '6',
      }, {
        label: '乐事红薯味',
        value: '7',
      }, {
        label: '乐事红烩味',
        value: '8',
      }, {
        label: '乐事黄瓜味',
        value: '9',
      }, {
        label: '夹心巧克力',
        value: '10',
      },
      {
        label: '卫龙大面筋',
        value: '1',
      },
      {
        label: '乐事烧烤味',
        value: '2',
      }, {
        label: '紫葡萄味',
        value: '3',
      }, {
        label: '威化饼干',
        value: '4',
      }, {
        label: '好巴食麻辣豆干',
        value: '5',
      }, {
        label: '经典原味薯片',
        value: '6',
      }, {
        label: '乐事红薯味',
        value: '7',
      }, {
        label: '乐事红烩味',
        value: '8',
      }, {
        label: '乐事黄瓜味',
        value: '9',
      }, {
        label: '夹心巧克力',
        value: '10',
      }
    ],
  }, {
    value: '2',
    label: '全部商品',
    children: [
      {
        label: '话梅片',
        value: '1',
      }, {
        label: '草莓味软糖',
        value: '2',
      }, {
        label: '紫葡萄味',
        value: '3',
      }, {
        label: '泡椒凤爪',
        value: '4',
      }],
  },
  {
    value: '3',
    label: '休闲零食',
    children: [
      {
        label: '自己加数据',
        value: '1',
      },
    ],
  },
];

class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: data,
      show: true,
    };
  }
  onChange = (value) => {
    console.log(value);
  }
  onOk = (value) => {
    alert('结算按钮');
    console.log(value);
  }
  onCancel = () => {
    alert('取消按钮');
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="multi-foo-menu"
        data={initData}
        value={['1', ['3', '4']]} //初始化选定数据
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight-60}
        multiSelect
      />

    );
    return (
      <div>
        <div className="123">
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
        </div>
        {menuEl}
      </div>
    );
  }
}

ReactDom.render(<MenuExample />, document.getElementById('app'));
