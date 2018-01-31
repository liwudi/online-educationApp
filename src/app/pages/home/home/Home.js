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

                {/*视频区*/}
                <div className="area-video">
                    <div className="disFx space-between ">
                        <img src={require('../../../assets/myicon/destinationed.png')} alt=""/>
                        <span>更多视频>></span>
                    </div>

                </div>

                {/*音频区*/}
                <div className="area-audio">
                    <div>
                        <img src={require('../../../assets/myicon/destinationed.png')} alt=""/>
                        <span>更多视频>></span>
                    </div>

                </div>

                {/*会员专享*/}
                <div className="area-member">
                    <div>
                        <img src={require('../../../assets/myicon/destinationed.png')} alt=""/>
                        <span>更多视频>></span>
                    </div>

                </div>

                {/*公司动态*/}
                <div className="area-company">
                    <div>
                        <img src={require('../../../assets/myicon/destinationed.png')} alt=""/>
                        <span>更多视频>></span>
                    </div>

                </div>
            </div>
        )
    }
}