/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import SearchComponent from '../../../components/SearchComponent';
import PageNav from '../../../components/PageNav';
import AudioItem from '../components/AudioItem';
import VideoItem from '../components/VideoItem';
import CompanyItem from '../components/CompanyItem';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: 'http://img1.imgtn.bdimg.com/it/u=2364244149,3298797080&fm=27&gp=0.jpg'
        }
    }
    render(){
        return (
            <div className="fx1 autoBox">
                <div className="center paddingTop paddingBottom">
                    <SearchComponent/>
                </div>
                <div className="height200">
                    <img className="wrapper" src="https://intl.rakuten-static.com/b/gs/en/event/freeshipping/20180123/img/840x417cn.jpg" alt=""/>
                </div>

                {/*视频区*/}
                <div className="area-video padding boxSizing">
                    <PageNav
                        title='视频区'
                    ></PageNav>
                    <div className="boxSizing disFx space-between" style={{flexWrap: 'wrap'}}>

                        <VideoItem
                            src={this.state.src}
                        />
                        <VideoItem
                            src={this.state.src}
                        />
                        <VideoItem
                            src={this.state.src}
                        />
                        <VideoItem
                            src={this.state.src}
                        />
                    </div>

                </div>

                {/*音频区*/}
                <div className="area-audio padding">
                    <PageNav
                        title='音频区'
                    ></PageNav>
                    <div className="boxSizing">
                        <AudioItem
                            src={this.state.src}
                        />
                        <AudioItem
                            src={this.state.src}
                        />
                        <AudioItem
                            src={this.state.src}
                        />
                    </div>

                </div>

                {/*会员专享*/}
                <div className="area-member padding">
                    <PageNav
                        title="会员专享"
                    ></PageNav>
                    <div className="boxSizing disFx space-between">
                        <VideoItem
                            src={this.state.src}
                        />
                        <VideoItem
                            src={this.state.src}
                        />
                        <VideoItem
                            src={this.state.src}
                        />
                        <VideoItem
                            src={this.state.src}
                        />
                    </div>

                </div>

                {/*公司动态*/}
                <div className="area-company padding">
                    <PageNav
                        title="公司动态"
                    ></PageNav>
                    <div className="boxSizing disFx space-between marginTop">
                        <CompanyItem
                            src={this.state.src}
                        />
                        <CompanyItem
                            src={this.state.src}
                        />
                        <CompanyItem
                            src={this.state.src}
                        />


                    </div>

                </div>
            </div>
        )
    }
}