/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';

import ViewForRightArrow from '../../../components/ViewForRightArrow'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1388809664,2378370233&fm=27&gp=0.jpg'
        }
    }
    render(){
        return (
            <div className="fx1 autoBox bgf1 boxSizing">
                <div className="height150 bgOrange">
                    <div className="bigortrait">
                        <img className="bigortrait" src={this.state.src} alt="头像"/>
                    </div>
                </div>
                <ViewForRightArrow
                    style={{marginTop: '10px'}}
                    title="个人资料"
                />
                <ViewForRightArrow title="我的收藏"/>
                <ViewForRightArrow style={{marginTop: '10px'}} title="我的余额"/>
                <ViewForRightArrow title="我的订单"/>
                <ViewForRightArrow style={{marginTop: '10px'}} title="设置"/>
                <ViewForRightArrow style={{marginTop: '10px'}} title="意见反馈"/>
                <ViewForRightArrow title="评价"/>
            </div>
        )
    }
}