import React, {Component} from 'react';

const data = [
    {
      value: '1',
      label: '双十一狂欢',
      children: [
        {
          label: '卫龙大面筋',
          price: '2.5',
          oldprice: '5',
          num: 0,
          value: '1',
        },
        {
          label: '乐事烧烤味',
          price: '3.5',
          oldprice: '5',
          num: 0,
          value: '2',
        }, {
          label: '紫葡萄味',
          price: '4.6',
          oldprice: '5',
          num: 0,
          value: '3',
        }, {
          label: '威化饼干',
          value: '4',
          price: '0.5',
          oldprice: '5',
          num: 0,
        }, {
          label: '好巴食麻辣豆干',
          price: '3.7',
          oldprice: '5',
          num: 0,
          value: '5',
        }, {
          label: '经典原味薯片',
          price: '3.8',
          oldprice: '5',
          num: 0,
          value: '6',
        }, {
          label: '乐事红薯味',
          price: '3.9',
          oldprice: '5',
          num: 0,
          value: '7',
        }, {
          label: '乐事红烩味',
          price: '4.5',
          oldprice: '5',
          num: 0,
          value: '8',
        }, {
          label: '乐事黄瓜味',
          price: '4.7',
          oldprice: '5',
          num: 0,
          value: '9',
        }, {
          label: '夹心巧克力',
          price: '5.5',
          oldprice: '5',
          num: 0,
          value: '10',
        },
        {
          label: '卫龙大面筋',
          price: '6.5',
          oldprice: '5',
          num: 0,
          value: '1',
        },
        {
          label: '乐事烧烤味',
          price: '8.5',
          oldprice: '5',
          num: 0,
          value: '2',
        }, {
            label: '卫龙大面筋',
            price: '2.5',
            oldprice: '5',
            num: 0,
            value: '1',
          },
          {
            label: '乐事烧烤味',
            price: '3.5',
            oldprice: '5',
            num: 0,
            value: '2',
          }, {
            label: '紫葡萄味',
            price: '4.6',
            oldprice: '5',
            num: 0,
            value: '3',
          }, {
            label: '威化饼干',
            value: '4',
            price: '0.5',
            oldprice: '5',
            num: 0,
          }, {
            label: '好巴食麻辣豆干',
            price: '3.7',
            oldprice: '5',
            num: 0,
            value: '5',
          }, {
            label: '经典原味薯片',
            price: '3.8',
            oldprice: '5',
            num: 0,
            value: '6',
          }, {
            label: '乐事红薯味',
            price: '3.9',
            oldprice: '5',
            num: 0,
            value: '7',
          }, {
            label: '乐事红烩味',
            price: '4.5',
            oldprice: '5',
            num: 0,
            value: '8',
          }, {
            label: '乐事黄瓜味',
            price: '4.7',
            oldprice: '5',
            num: 0,
            value: '9',
          }, {
            label: '夹心巧克力',
            price: '5.5',
            oldprice: '5',
            num: 0,
            value: '10',
          },
          {
            label: '卫龙大面筋',
            price: '6.5',
            oldprice: '5',
            num: 0,
            value: '1',
          },
          {
            label: '乐事烧烤味',
            price: '8.5',
            oldprice: '5',
            num: 0,
            value: '2',
          }
      ],
    }, {
      value: '2',
      label: '全部商品',
      children: [
        {
            label: '12345',
            price: '2.5',
            oldprice: '5',
            num: 0,
            value: '1',
          },
          {
            label: '2425535',
            price: '3.5',
            oldprice: '5',
            num: 0,
            value: '2',
          }, {
            label: '233636',
            price: '4.6',
            oldprice: '5',
            num: 0,
            value: '3',
          }, {
            label: 'sdgsdhdh',
            value: '4',
            price: '0.5',
            oldprice: '5',
            num: 0,
          }, {
            label: '434646个人股',
            price: '3.7',
            oldprice: '5',
            num: 0,
            value: '5',
          }, {
            label: 'sgsdggdg',
            price: '3.8',
            oldprice: '5',
            num: 0,
            value: '6',
          }, {
            label: 'sdgsdgdh',
            price: '3.9',
            oldprice: '5',
            num: 0,
            value: '7',
          }, {
            label: 'sggegege',
            price: '4.5',
            oldprice: '5',
            num: 0,
            value: '8',
          }, {
            label: 'erherhreheh',
            price: '4.7',
            oldprice: '5',
            num: 0,
            value: '9',
          }, {
            label: 'erherhr',
            price: '5.5',
            oldprice: '5',
            num: 0,
            value: '10',
          },
          {
            label: '46757',
            price: '6.5',
            oldprice: '5',
            num: 0,
            value: '1',
          },
          {
            label: 'ergerhreh',
            price: '8.5',
            oldprice: '5',
            num: 0,
            value: '2',
          }],
    },
    {
      value: '3',
      label: '休闲零食',
      children: [
        {
          label: '自己加数据',
          price: '2.5',
          oldprice: '5',
          num: 0,
          value: '1',
        },
      ],
    },
  ];



export default class Menuel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            children: data[0].children,
            foodsIndex: 0,
            shopCar: [], //购物车商品种类数量
            goodsNum: 0, //商品数量
            balance: 0, //商品总价
            showMask: false //是否显示购买列表
        };
    }
    handleClick(n){
        this.setState({
            children: data[n].children,
            foodsIndex: n
        });
    }
    addCar(obj){
        const counts = data[this.state.foodsIndex].children.indexOf(obj);
        data[this.state.foodsIndex].children[counts].num += 1;
        this.setState({children: data[this.state.foodsIndex].children});
        this.state.shopCar.indexOf(obj)<0 ? this.state.shopCar.push(obj) : null;
        this.setState({
            goodsNum: eval(this.state.shopCar.map((obj)=>{return obj.num}).join('+')),
            balance: eval(this.state.shopCar.map((obj)=>{return obj.num*obj.price}).join('+'))
        });
    }
    reduceCar(obj){
        const counts = data[this.state.foodsIndex].children.indexOf(obj);
        data[this.state.foodsIndex].children[counts].num -= 1;
        this.setState({children: data[this.state.foodsIndex].children});
        this.state.goodsNum -= 1;
        this.state.balance -= obj.price;
        obj.num == 0 ? this.state.shopCar.splice(this.state.shopCar.indexOf(obj),1) : null;
        if(!this.state.shopCar.length && this.state.showMask){
            this.setState({showMask:false});
            document.getElementById('hide-bar').style.top = 0;
        }
    }
    showList(){
        if(!this.state.goodsNum){alert('请先选择商品');return;}
        this.setState({showMask:true});
        document.getElementById('hide-bar').style.top = -((this.state.shopCar.length*50)+45)+'px';
        document.getElementById('hide-bar').style.height = ((this.state.shopCar.length*50)+45)+'px';
        if(document.getElementById('hide-bar').className.indexOf('animate')<0){
            document.getElementById('hide-bar').className += ' animate';
        }
        console.log(this.state.shopCar.length*50);
    }
    closeMask(){
        this.setState({showMask:false});
        document.getElementById('hide-bar').style.top = 0;
    }
    makeOrder(){
        if(!this.state.goodsNum){alert('请先选择商品');return;}
        console.log(this.state.shopCar);
    }
    render() {
        return (
            <div className="am-flexbox am-menu foo-menu am-flexbox-dir-column am-flexbox-align-stretch">
                <div className="am-flexbox am-menu-select-container am-flexbox-align-start"  style={{ width: '100%', height: document.documentElement.clientHeight-60, display: 'flex', justifyContent: 'center' }}>
                    <div className="am-flexbox-item">
                        <div className="am-list">
                            <div className="am-list-body">
                                {
                                    data.map((obj,index)=>{
                                        return(
                                            <div 
                                            key={index} 
                                            onClick={this.handleClick.bind(this,index)}
                                            className={index==this.state.foodsIndex ? "am-list-item am-menu-selected am-list-item-middle" : "am-list-item am-list-item-middle"}
                                            >
                                                <div className="am-list-line">
                                                    <div className="am-list-content">
                                                        {obj.label}
                                                    </div>
                                                </div>
                                                <div className="am-list-ripple">
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="am-flexbox-item am-menu-select-container-submenu">
                        <div className="am-list am-sub-menu">
                            <div className="am-list-body">
                                {
                                    this.state.children.map((obj,index)=>{
                                        return(
                                            <div className="am-list-item am-radio-item am-list-item-middle goods-item" key={index}>
                                                <div className="goods-img">
                                                    <img src="https://img.xingbianli.cn/1506064001704143472281.png?x-oss-process=image/resize,m_lfit,h_120,w_120" />
                                                </div>
                                                <div className="goods-info">
                                                    <p className="go-name">{obj.label}</p>
                                                    <span className="tj">特价</span><span className="tj">限购一份</span>
                                                    <div className="price">{obj.price}元<span className="old-price">{obj.oldprice}元</span></div>
                                                </div>
                                                <div className="goods-add">
                                                    <span className="iconfont icon-jianshao" style={obj.num ? {'display':'inline-block'} : {'display':'none'}} onClick={this.reduceCar.bind(this,obj)}></span>
                                                    <span className="num" style={obj.num ? {'display':'inline-block'} : {'display':'none'}}>{obj.num}</span>
                                                    <span className="iconfont icon-tianjia" onClick={this.addCar.bind(this,obj)}></span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="go-result">
                    <div className="order-panel">
                        <div className="money" onClick={this.showList.bind(this)}>
                            <span className="car">
                                <i className="iconfont icon-gouwuche"></i>
                                <i className="bage" style={!this.state.goodsNum?{"display":"none"}:{"display":"block"}}>{this.state.goodsNum}</i>
                            </span>
                            <span className="ze">合计：{isNaN(this.state.balance) ? this.state.balance : Math.round(this.state.balance*100)/100}元</span>
                        </div>
                        <div className="go-order">
                            <span className="order-but" onClick={this.makeOrder.bind(this)}>{!this.state.goodsNum ? '结算' : '确认支付'}</span>
                        </div>
                    </div>

                    <div id="hide-bar" className="goods-list" style={{"width":document.documentElement.clientWidth-30}}>
                        <p className="check-goods">已选商品  ( {this.state.goodsNum} )</p>
                        <ul>
                            {
                                this.state.shopCar.map((obj,index)=>{
                                    return(
                                        <li key={index}>
                                            <div className="go-name">{obj.label}</div>
                                            <div className="go-price">{obj.price}元</div>
                                            <div className="go-opera">
                                                <span className="iconfont icon-jianshao" onClick={this.reduceCar.bind(this,obj)}></span>
                                                <span className="num">{obj.num}</span>
                                                <span className="iconfont icon-tianjia" onClick={this.addCar.bind(this,obj)}></span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="maskbg" style={this.state.showMask?{"display":"block"}:{"display":"none"}} onClick={this.closeMask.bind(this)}></div>
            </div>
        );
    }
}