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

        }
    }
    render(){
        return(
            <div className="pageBox" style={{position:'relative'}}>

                <div className="fx1 boxSizing" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>

                    <Route path="/home" render={()=><Redirect to="/home/home"/>} />
                    <Route path="/home/home" component={Home}/>
                    <Route path="/home/me" component={Me}/>
                    <Route path="/home/communicate" component={Communicate}/>
                    <Route path="/home/classify" component={Classify}/>
                </div>
                <div className="nav borderTop">
                    <div className="fx1 center">
                        <Link to="/home/home">首页</Link>
                    </div>
                    <div className="fx1 center">
                        <Link to="/home/classify">分类</Link>
                    </div>
                    <div className="fx1 center">
                        <Link to="/home/communicate">交流</Link>
                    </div>
                    <div className="fx1 center">
                        <Link to="/home/me">我的</Link>
                    </div>
                </div>
            </div>
        )
    }
}