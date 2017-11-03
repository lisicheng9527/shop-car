import React, {Component} from 'react';

const data = [
    {
      value: '1',
      label: 'Food',
      children: [
        {
          label: 'All Foods',
          value: '1',
          disabled: false,
        },
        {
          label: 'Chinese Food',
          value: '2',
        }, {
          label: 'Hot Pot',
          value: '3',
        }, {
          label: 'Buffet',
          value: '4',
        }, {
          label: 'Fast Food',
          value: '5',
        }, {
          label: 'Snack',
          value: '6',
        }, {
          label: 'Bread',
          value: '7',
        }, {
          label: 'Fruit',
          value: '8',
        }, {
          label: 'Noodle',
          value: '9',
        }, {
          label: 'Leisure Food',
          value: '10',
        }],
    }, {
      value: '2',
      label: 'Supermarket',
      children: [
        {
          label: 'All Supermarkets',
          value: '1',
        }, {
          label: 'Supermarket',
          value: '2',
          disabled: true,
        }, {
          label: 'C-Store',
          value: '3',
        }, {
          label: 'Personal Care',
          value: '4',
        }],
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
      children: [
        {
          label: 'you can not see',
          value: '1',
        },
      ],
    },
  ];
export default class InputControl extends React.Component {
    render() {
        return (
            <div className="am-flexbox am-menu foo-menu am-flexbox-dir-column am-flexbox-align-stretch">
                <div className="am-flexbox am-menu-select-container am-flexbox-align-start"  style={{ width: '100%', height: document.documentElement.clientHeight-45, display: 'flex', justifyContent: 'center' }}>
                    <div className="am-flexbox-item">
                        <div className="am-list">
                            <div className="am-list-body">

                                <div className="am-list-item am-menu-selected am-list-item-middle">
                                    <div className="am-list-line">
                                        <div className="am-list-content">
                                            Food
                                        </div>
                                    </div>
                                    <div className="am-list-ripple">
                                    </div>
                                </div>
                                <div className="am-list-item am-list-item-middle">
                                    <div className="am-list-line">
                                        <div className="am-list-content">
                                            Supermarket
                                        </div>
                                    </div>
                                    <div className="am-list-ripple">
                                    </div>
                                </div>
                                <div className="am-list-item am-list-item-middle">
                                    <div className="am-list-line">
                                        <div className="am-list-content">
                                            Extra
                                        </div>
                                    </div>
                                    <div className="am-list-ripple">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="am-flexbox-item am-menu-select-container-submenu">
                        <div className="am-list am-sub-menu">
                            <div className="am-list-body">
                                <div className="am-list-item am-radio-item am-list-item-middle">
                                    <div className="am-list-line">
                                        <div className="am-list-content">
                                            All Foods
                                        </div>
                                        <div className="am-list-extra">
                                            <label className="am-radio-wrapper">
                                                <span className="am-radio">
                                                    <input type="radio" className="am-radio-input" value="on" />
                                                    <span className="am-radio-inner">
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="am-list-ripple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}