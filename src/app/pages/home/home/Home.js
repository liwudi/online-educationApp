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
            src: 'http://img1.imgtn.bdimg.com/it/u=2364244149,3298797080&fm=27&gp=0.jpg',
            videoList: [{},{},{},{}],
            searchContent: '',
            bannerList: [
                {
                    img: "https://intl.rakuten-static.com/b/gs/en/event/freeshipping/20180123/img/840x417cn.jpg"
                },{
                    img: "https://m.360buyimg.com/img/jfs/t2977/335/1927273397/18081/64a032d5/5796df21N0c6edd4e.png"
                },{
                    img: "https://img30.360buyimg.com/da/s750x366_jfs/t11278/255/899926154/116991/f64c29a6/59fad637N96104620.jpg"
                }
            ],
            bannerSrc: 'https://intl.rakuten-static.com/b/gs/en/event/freeshipping/20180123/img/840x417cn.jpg'
        }
    }
    goVedioDetail(){
        alert(1);
        this.props.history.push('/audio');
    }
    getValue(value){
        this.setState({
            searchContent: value
        })
    }
    searchEvent(){
        console.log(this.state.searchContent);

    }
    componentDidMount(){
        this.getBannerList();
    }
    componentWillUnMount(){
        clearInterval(this.timer);
    }
    getBannerList(){
        console.log('获取轮播列表的逻辑');
        var that = this;
        var banner = new Banner();
        banner.init();
        function Banner() {
            this.index = 0;
            this.init = function () {
                that.timer = setInterval(()=>{
                    this.index++;
                    if(this.index > 2){
                        this.index = 0
                    }
                    that.setState({
                        bannerSrc: that.state.bannerList[this.index].img
                    })
                },1500);

            }
        }

    }
    render(){
        return (
            <div className="fx1 autoBox">
                <div className="center paddingTop paddingBottom">
                    <SearchComponent
                        value={this.state.searchContent}
                        getValue={(value)=>this.getValue(value)}
                        searchEvent={()=>this.searchEvent()}
                    />
                </div>
                <div className="height200">
                    <img
                        className="wrapper"
                        src={this.state.bannerSrc}
                        alt=""
                    />
                </div>

                {/*视频区*/}
                <div className="area-video padding boxSizing">
                    <PageNav
                        title='视频区'
                    ></PageNav>
                    <div className="boxSizing disFx space-between" style={{flexWrap: 'wrap'}}>
                        {/*说明：用于展示视屏列表*/}
                        {
                            this.state.videoList.map((item,index)=>{
                                return (
                                    <VideoItem
                                        key={index}
                                        onClick={()=>this.goVedioDetail()}
                                        src={this.state.src}
                                    />
                                )
                            })
                        }
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