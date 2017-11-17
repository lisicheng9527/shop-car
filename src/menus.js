import React, {Component} from 'react';
import { NavBar, Icon, Toast } from 'antd-mobile';
import axios from 'axios';

export default class Menuel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tab: [],
            children:[],
            foodsIndex: 0,
            shopCar: [], //购物车商品种类数量
            goodsNum: 0, //商品数量
            balance: 0, //商品总价
            showMask: false //是否显示购买列表
        };
    }
    handleClick(n){
        this.setState({
            children: this.state.tab[n].children,
            foodsIndex: n
        });
    }
    addCar(obj){
        if(obj.tab>=0){
            var counts = this.state.tab[obj.tab].children.indexOf(obj);
            this.state.tab[obj.tab].children[counts].num += 1;
        }else{
            var counts = this.state.tab[this.state.foodsIndex].children.indexOf(obj);
            this.state.tab[this.state.foodsIndex].children[counts].num += 1;
        }
        this.setState({children: this.state.tab[this.state.foodsIndex].children});
        if(!this.contains(this.state.shopCar,obj)){
            obj.tab = this.state.foodsIndex;
            obj.sonTab = counts;
            this.state.shopCar.push(obj);
        }
        this.setState({
            goodsNum: eval(this.state.shopCar.map((obj)=>{return obj.num}).join('+')),
            balance: eval(this.state.shopCar.map((obj)=>{return obj.num*obj.price}).join('+'))
        });
    }
    contains(arr,obj){
        var i = arr.length;
        while(i--){
            if(arr[i].label == obj.label){
                return true;
            }
        }
        return false;
    }
    reduceCar(obj){
        const counts = this.state.tab[obj.tab].children.indexOf(obj);
        this.state.tab[obj.tab].children[counts].num -= 1;
        this.setState({children: this.state.tab[this.state.foodsIndex].children});
        this.state.goodsNum -= 1;
        this.state.balance -= obj.price;
        obj.num == 0 ? this.state.shopCar.splice(this.state.shopCar.indexOf(obj),1) : null;
        if(!this.state.shopCar.length && this.state.showMask){
            this.setState({showMask:false});
            document.getElementById('hide-bar').style.top = 0;
        }
    }
    showList(){
        if(!this.state.goodsNum){Toast.info('请先选择商品 !!!', 2, null, false);return;}
        this.setState({showMask:true});
        this.updateList();
    }
    closeMask(){
        this.setState({showMask:false});
        document.getElementById('hide-bar').style.top = 0;
    }
    makeOrder(){
        if(!this.state.goodsNum){Toast.info('请先选择商品 !!!', 2, null, false);return;}
        Toast.success('购买商品信息已输出在控制台',5);
        console.log(this.state.shopCar);
    }
    updateList(){
        var cHeight = this.state.shopCar.length*50+45,dHeight = document.documentElement.clientHeight-300,oHide = document.getElementById('hide-bar');
        if(cHeight>dHeight){
            oHide.style.top = -dHeight+'px';oHide.style.height = dHeight+'px';
            oHide.getElementsByTagName('ul')[0].style.height = (dHeight-49)+'px';
            oHide.getElementsByTagName('ul')[0].style.overflow = 'auto';
            if(oHide.className.indexOf('animate')<0){
                oHide.className += ' animate';
            }
        }else{
            oHide.style.top = -((this.state.shopCar.length*50)+45)+'px';
            oHide.style.height = ((this.state.shopCar.length*50)+45)+'px';
            if(oHide.className.indexOf('animate')<0){
                oHide.className += ' animate';
            }
        }
    }
    componentDidMount(){
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络错误，请刷新重试!!!', 3);
        });
        axios.get(this.props.url)
        .then(res => {
            const status = this.getLocal('status'),dirty = this.getLocal('dirty');
            if(status && JSON.stringify(res.data)==JSON.stringify(dirty)){
                this.setState({
                    tab: status.carInfo,
                    children: status.carInfo[status.index].children,
                    foodsIndex: status.index,
                    goodsNum: status.goodsNum,
                    balance: status.balance
                });
                if(status.shopCar.length>0){
                    var arr = [];
                    for(var i=0;i<status.shopCar.length;i++){
                        arr[i] = status.carInfo[status.shopCar[i].tab].children[status.shopCar[i].sonTab];
                    }
                    this.setState({shopCar: arr});
                }
            }else{
                this.setLocal('dirty',res.data);
                this.setState({
                    tab: res.data,
                    foodsIndex: 0,
                    children: res.data[0].children
                });
            }
            Toast.hide();
            if(status){
                if(status.shopCar.length && JSON.stringify(res.data)!=JSON.stringify(dirty)){
                    Toast.success('商品数据已更新，请重新添加购物车!', 4);
                }
            }
        });
    }
    componentDidUpdate(){
        const status = {carInfo:this.state.tab,index:this.state.foodsIndex,shopCar:this.state.shopCar,goodsNum:this.state.goodsNum,balance:this.state.balance};
        this.setLocal('status',status);
        if(this.state.showMask){this.updateList();}
    }
    setLocal(args,obj){
        window.localStorage.setItem(args,JSON.stringify(obj));
    }
    getLocal(args){
        return JSON.parse(window.localStorage.getItem(args)) || null;
    }
    render() {
        return (
            <div>
                <NavBar
                    leftContent="Menu"
                    mode="light"
                    leftContent="购物车"
                    rightContent={[
                        <Icon key="1" type="ellipsis" style={{ color: '#fc0' }} />,
                    ]}
                >
                    购物车
                </NavBar>
                <div className="am-flexbox am-menu foo-menu am-flexbox-dir-column am-flexbox-align-stretch">
                    <div className="am-flexbox am-menu-select-container am-flexbox-align-start"  style={{ width: '100%', height: document.documentElement.clientHeight-60, display: 'flex', justifyContent: 'center' }}>
                        <div className="am-flexbox-item">
                            <div className="am-list">
                                <div className="am-list-body">
                                    {
                                        this.state.tab.map((obj,index)=>{
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
                                                        <img src={obj.img} />
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
