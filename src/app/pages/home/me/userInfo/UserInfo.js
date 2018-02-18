/**
 * Created by mapbar_front on 2018/2/18.
 */
import React, { Component } from 'react';

import ViewForRightArrow from '../../../../components/ViewForRightArrow';
import ViewForRightDom from '../../../../components/ViewForRightDom.js';
import TopBanner from '../../../../components/TopBanner.js';

export default class UserInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                userName:'mapbar_front',
                userImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1388809664,2378370233&fm=27&gp=0.jpg',
                sex: 0,
                userIntroduction: '人帅技术强！'
            },
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1388809664,2378370233&fm=27&gp=0.jpg'
        }
    }
    goBack(){
        alert('调用保存接口')
        this.props.history.goBack();
    }
    renderRightView(){
        return (
            <span
                onClick={() => this.goBack()}
                className="colorWhite topBannerRight">
                保存
            </span>
        )
    }
    render(){
        return (
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner
                    style={{backgroundColor:'orangered',color:'white'}}
                    title="个人资料"
                    router={this.props.history}
                    rightView={()=> this.renderRightView()}
                />
                <div className="fx1 boxSizing colCenter" style={{overflow:'auto'}}>
                    <div className="height150 bgred center">
                        <img className="bigPortrait" src={this.state.src} alt="头像"/>
                    </div>
                    <div className="padding">
                        <ViewForRightDom
                            title="昵称"
                            content={this.state.userInfo.userName || ''}
                            style={{borderBottom: '1px solid #cccccc'}}
                        />
                        <ViewForRightDom
                            title="性别"
                            content={this.state.userInfo.sex == 0 ? '男' : '女' || ''}
                            style={{borderBottom: '1px solid #cccccc'}}
                        />
                        <ViewForRightDom
                            title="介绍"
                            content={this.state.userInfo.userIntroduction || ''}
                            style={{borderBottom: '1px solid #cccccc'}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}