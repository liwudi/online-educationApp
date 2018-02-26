/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import TopBanner from '../../components/TopBanner.js';

export default class Vedio extends Component{
    constructor(props){
        super(props);
        this.state = {
            videoDetail: {
                id:1,
                fileid: 4,
                src:'http://pic.ibaotu.com/00/56/77/28b888piCuvW.mp4',
                introduce:[
                    '您可以自主安排教学视频,但需要注意完成作业。',
                    '本课程自购买之日起，三个月内有效！'
                ],
                name: '中国佛法',
                people: '零基础入门小白',
                picture: "/picture/fofa1.jpg",
                size: '100M',
                state: 1,
                timelength: '1小时'
            }
        }
    }
    render(){
        return (
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner title="视屏详情" router={this.props.history} />
                <div className="fx1 boxSizing colCenter" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>
                    <div
                        style={{height: '200px'}}
                    >
                        <video style={{width:'100%',height:'190px'}} controls>
                            <source src={this.state.videoDetail.src} type="video/mp4" />
                            您的浏览器不支持 HTML5 video 标签
                        </video>

                    </div>
                    <div className="padding">
                        <div className="suitPerson">
                            <h3>适用人群</h3>
                            <p>{this.state.videoDetail.people}</p>
                        </div>
                        <div className="courseInfo">
                            <h3>课程简介</h3>
                            {
                                this.state.videoDetail.introduce.map((item,index)=>{
                                    return (
                                        <p key={index}>{index+1}、{item}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}