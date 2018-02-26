/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import SearchComponent from '../../../components/SearchComponent';
import PageNav from '../../../components/PageNav';
import AudioItem from '../components/AudioItem';
import VedioItem from '../components/VedioItem';
import CompanyItem from '../components/CompanyItem';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1842512496,3591811004&fm=202&mola=new&crop=v1',
            src1: 'https://img30.360buyimg.com/da/s750x366_jfs/t11278/255/899926154/116991/f64c29a6/59fad637N96104620.jpg',
            videoList: [{},{},{},{}],
            audioList: [{},{},{}],
            searchContent: '',
            bannerList: [
                {
                    img: "https://intl.rakuten-static.com/b/gs/en/event/freeshipping/20180123/img/840x417cn.jpg"
                },{
                    img: "https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg_q50.jpg"
                },{
                    img: "https://img30.360buyimg.com/da/s750x366_jfs/t11278/255/899926154/116991/f64c29a6/59fad637N96104620.jpg"
                }
            ],
            bannerSrc: 'https://intl.rakuten-static.com/b/gs/en/event/freeshipping/20180123/img/840x417cn.jpg'
        }
    }
    goVedioDetail(){
        this.props.history.push('/vedio');
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
        this.timer && clearInterval(this.timer);
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
                <div className="area-video padding boxSizing marginButtom">
                    <PageNav
                        title='视频区'
                    ></PageNav>
                    <div className="boxSizing disFx space-between" style={{flexWrap: 'wrap'}}>
                        {/*说明：用于展示视屏列表*/}
                        {
                            this.state.videoList.map((item,index)=>{
                                return (
                                    <VedioItem
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
                <div style={{borderTop: '20px solid #eeeeee'}} className="area-audio padding">
                    <PageNav
                        title='音频区'
                    ></PageNav>
                    <div className="boxSizing">
                        {/*用于展示音频列表*/}
                        {
                            this.state.audioList.map((item,index)=>{
                                return (
                                    <AudioItem
                                        src={this.state.src1}
                                        key={index}
                                        onClick={()=>this.goVedioDetail()}
                                    />
                                )
                            })
                        }

                    </div>

                </div>

                {/*会员专享*/}
                {/*<div className="area-member padding">*/}
                    {/*<PageNav*/}
                        {/*title="会员专享"*/}
                    {/*></PageNav>*/}
                    {/*<div className="boxSizing disFx space-between">*/}
                        {/*<VedioItem*/}
                            {/*src={this.state.src}*/}
                        {/*/>*/}
                        {/*<VedioItem*/}
                            {/*src={this.state.src}*/}
                        {/*/>*/}
                        {/*<VedioItem*/}
                            {/*src={this.state.src}*/}
                        {/*/>*/}
                        {/*<VedioItem*/}
                            {/*src={this.state.src}*/}
                        {/*/>*/}
                    {/*</div>*/}

                {/*</div>*/}

                {/*公司动态*/}
                {/*<div className="area-company padding">*/}
                    {/*<PageNav*/}
                        {/*title="公司动态"*/}
                    {/*></PageNav>*/}
                    {/*<div className="boxSizing disFx space-between marginTop">*/}
                        {/*<CompanyItem*/}
                            {/*src={this.state.src}*/}
                        {/*/>*/}
                        {/*<CompanyItem*/}
                            {/*src={this.state.src}*/}
                        {/*/>*/}
                        {/*<CompanyItem*/}
                            {/*src={this.state.src}*/}
                        {/*/>*/}

                    {/*</div>*/}

                {/*</div>*/}
            </div>
        )
    }
}