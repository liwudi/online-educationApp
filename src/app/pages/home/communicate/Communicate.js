/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HotNews from './hotnews/HotNews'


export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="fx1 autoBox">
                <div className="disFx space-around nav rowCenter">
                    <span><Link to="/communicate/company">公司动态</Link></span>
                    <span><Link to="/communicate/new">最新动态</Link></span>
                </div>
                <div className="fx1">
                    {/*<Route path="/company" component={company}/>*/}
                    <Route path="/communicate/new" component={HotNews}/>
                </div>
            </div>
        )
    }
}