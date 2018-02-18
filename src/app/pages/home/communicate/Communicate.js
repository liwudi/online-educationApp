/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import HotNews from './hotnews/HotNews'
import Company from './company/Company'


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0
        }
    }
    setCurrentIndex(index){
        this.setState({
            currentIndex: index
        })
    }
    render(){
        return (
            <div className="fx1 autoBox">
                <div className="disFx space-around nav rowCenter borderBottom">
                    <span onClick={()=>this.setCurrentIndex(0)}>
                        <Link
                            style={{color:this.state.currentIndex == 0 ? '#d81e06':'#444444'}}
                            to="/home/communicate/company"
                        >
                            公司动态
                        </Link>
                    </span>
                    <span onClick={()=>this.setCurrentIndex(1)}>
                        <Link
                            style={{color:this.state.currentIndex == 1 ? '#d81e06':'#444444'}}
                            to="/home/communicate/new"
                        >
                            最新动态
                        </Link>
                    </span>
                </div>
                <div className="fx1 autoBox">
                    <Switch>

                        <Route path="/home/communicate/company" component={Company}/>
                        <Route path="/home/communicate/new" component={HotNews}/>
                        <Route path="/home/communicate" render={()=><Redirect to="/home/communicate/company"/>} />
                    </Switch>
                </div>
            </div>
        )
    }
}