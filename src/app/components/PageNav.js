/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';


export default class InputComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="disFx space-between page-nav">
                <div className="disFx">
                    <img className="iconDefault" src={require('../assets/myicon/destination.png')} alt=""/>
                    <span className="marginLeft">{this.props.title}</span>
                </div>
                <img className="iconDefault" src={require('../assets/myicon/more.png')} alt=""/>

            </div>
        )
    }
}