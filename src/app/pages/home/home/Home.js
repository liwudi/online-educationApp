/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import SearchComponent from '../../../components/SearchComponent';
export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="fx1 autoBox">
                <div className="center paddingTop paddingBottom">
                    <SearchComponent/>
                </div>
                <div className="swiper">
                    <img className="wrapper" src="https://intl.rakuten-static.com/b/gs/en/event/freeshipping/20180123/img/840x417cn.jpg" alt=""/>
                </div>
                首页
            </div>
        )
    }
}