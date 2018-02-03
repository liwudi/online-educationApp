/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HotNews from './hotnews/HotNews'
import Company from './company/Company'


export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="fx1 autoBox">
                <div className="disFx space-around nav rowCenter borderBottom">
                    <span><Link to="/home/communicate/company">公司动态</Link></span>
                    <span><Link to="/home/communicate/new">最新动态</Link></span>
                </div>
                <div className="fx1 autoBox">
                    <Route path="/home/communicate/company" component={Company}/>
                    <Route path="/home/communicate/new" component={HotNews}/>
                </div>
            </div>
        )
    }
}