/**
 * Created by mapbar_front on 2018/1/30.
 */
import React,{ Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import Home from './home/Home';
import Me from './me/Me';
import Communicate from './communicate/Communicate';
import Classify from './classify/Classify'

import '../../css/homePage.css'

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 1
        }
    }
    setCurrentIndex(index){
        this.setState({
            currentIndex: index
        })
    }
    render(){
        return(
            <div className="pageBox" style={{position:'relative'}}>

                <div className="fx1 boxSizing" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>
                    <Switch>
                    <Route path="/home/home" component={Home}/>
                    <Route path="/home/me" component={Me}/>
                    <Route path="/home/communicate" component={Communicate}/>
                    <Route path="/home/classify" component={Classify}/>
                    <Route path="/home" render={()=><Redirect to="/home/home"/>} />
                    </Switch>
                </div>
                <div className="nav borderTop">
                    <div onClick={()=>this.setCurrentIndex(1)} className="fx1 center colCenter">
                        <img
                            style={{display: this.state.currentIndex == 1 ? 'block':'none'}}
                            className="iconDefault" src={require("../../assets/icons/home1.png")}
                            alt=""
                        />
                        <img
                            style={{display: this.state.currentIndex == 1 ? 'none':'block'}}
                            className="iconDefault" src={require("../../assets/icons/home.png")} alt=""/>
                        <Link
                            style={{fontSize: '14px',marginTop:'5px',color: this.state.currentIndex == 1 ? '#d81e06':'#444444'}}
                            to="/home/home">
                            首页
                        </Link>
                    </div>
                    <div onClick={()=>this.setCurrentIndex(2)} className="fx1 center colCenter">
                        <img
                            style={{display: this.state.currentIndex == 2 ? 'block':'none'}}
                            className="iconDefault"
                            src={require("../../assets/icons/Category1.png")}
                            alt=""
                        />
                        <img
                            style={{display: this.state.currentIndex == 2 ? 'none':'block'}}
                            className="iconDefault"
                            src={require("../../assets/icons/Category.png")}
                            alt=""
                        />
                        <Link style={{fontSize: '14px',marginTop:'5px',color: this.state.currentIndex == 2 ? '#d81e06':'#444444'}} to="/home/classify">分类</Link>
                    </div>
                    <div onClick={()=>this.setCurrentIndex(3)} className="fx1 center colCenter">
                        <img
                            style={{display: this.state.currentIndex == 3 ? 'block':'none'}}
                            className="iconDefault"
                            src={require("../../assets/icons/comments1.png")}
                            alt=""/>
                        <img
                            style={{display: this.state.currentIndex == 3 ? 'none':'block'}}
                            className="iconDefault"
                            src={require("../../assets/icons/comments.png")}
                            alt=""/>
                        <Link style={{fontSize: '14px',marginTop:'5px',color: this.state.currentIndex == 3 ? '#d81e06':'#444444'}} to="/home/communicate">交流</Link>
                    </div>
                    <div onClick={()=>this.setCurrentIndex(4)} className="fx1 center colCenter">
                        <img
                            style={{display: this.state.currentIndex == 4 ? 'block':'none'}}
                            className="iconDefault"
                            src={require("../../assets/icons/account1.png")}
                            alt=""/>
                        <img
                            style={{display: this.state.currentIndex == 4 ? 'none':'block'}}
                            className="iconDefault"
                            src={require("../../assets/icons/account.png")}
                            alt=""/>
                        <Link style={{fontSize: '14px',marginTop:'5px',color: this.state.currentIndex == 4 ? '#d81e06':'#444444'}} to="/home/me">我的</Link>
                    </div>
                </div>
            </div>
        )
    }
}