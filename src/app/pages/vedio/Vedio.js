/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import TopBanner from '../../components/TopBanner.js';

export default class Vedio extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner title="视屏详情" router={this.props.history} />
                <div className="fx1 boxSizing colCenter" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>
                    <div
                        style={{height: '200px',backgroundColor: 'red'}}
                    >
                        视屏audio
                    </div>
                    <div className="padding">
                        <div className="suitPerson">
                            <h3>适用人群</h3>
                            <p>零基础小白入门，这门课程就够了</p>
                        </div>
                        <div className="courseInfo">
                            <h3>课程简介</h3>
                            <p>1、您可以自主安排教学视屏；单需注意在规划的学习周期内完成作业。</p>
                            <p>2、本课程自购买之日起，三个月内有效！</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}