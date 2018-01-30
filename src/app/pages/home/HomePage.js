/**
 * Created by mapbar_front on 2018/1/30.
 */
import React,{ Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';



import Audio from '../audio/Audio';
import Vedio from '../vedio/Vedio';

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

                    <Route path="/home" component={Home}/>
                    <Route path="/me" component={Me}/>
                    <Route path="/communicate" component={Communicate}/>
                    <Route path="/classify" component={Classify}/>
                </div>
                <div className="nav">
                    <div className="fx1 center">
                        <Link to="/home">首页</Link>
                    </div>
                    <div className="fx1 center">
                        <Link to="/classify">分类</Link>
                    </div>
                    <div className="fx1 center">
                        <Link to="/communicate">交流</Link>
                    </div>
                    <div className="fx1 center">
                        <Link to="/me">我的</Link>
                    </div>
                </div>
            </div>
        )
    }
}