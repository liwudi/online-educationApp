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
            <div className="search-container rowCenter border padding">
                <img className="searchIcon" src={require('../assets/myicon/search.png')} alt=""/>
                <input placeholder="请输入搜索内容" className="inputDefault" type="text"/>
            </div>
        )
    }
}