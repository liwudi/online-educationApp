/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';
import SearchComponent from '../../../components/SearchComponent';
import VedioItem from '../components/VedioItem.js';
import AudioItem from '../components/AudioItem';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            //src: 'http://img4.imgtn.bdimg.com/it/u=3950028239,2497327107&fm=27&gp=0.jpg',
            src: 'http://8.xiustatic.com/m/topicType/2018/02/11/f16a596a-6962-4085-9129-a151a415b822.jpg',
            currentIndex: 0,
            typeList: ['视频区','音频区','文字区','会员区'],
            vedioList: [{},{},{},{}],
            audioList: [{},{},{}]
        }
    }
    clickEvent(index){
        console.log(index);
        this.setState({
            currentIndex: index
        })
    }
    render(){
        return (
            <div className="fx1 autoBox colCenter disFx wrapper">
                <div className="center paddingTop paddingBottom">
                    <SearchComponent/>
                </div>
                <div className="borderTop disFx fx1 autoBox">
                    <div className="navlist">
                        {
                            this.state.typeList.map((item,index) => {
                                return (
                                    <div
                                        key={index}
                                        style={this.state.currentIndex == index ? {backgroundColor: '#f1f1f1'}:null}
                                        onClick={()=>this.clickEvent(index)}
                                        className="padding borderBottom"
                                    >{item}</div>
                                )
                            })
                        }
                    </div>
                    <div
                        className="content fx1"
                        style={{alignItems: 'flex-start',backgroundColor: '#f1f1f1',flexWrap:'wrap',justifyContent: 'space-around'}}
                    >
                        {
                            (this.state.currentIndex == 0) && this.state.vedioList.map((item,index)=>{
                                return (
                                    <VedioItem
                                        key={index}
                                        style={{width: '40%',margin: '5%',backgroundColor:'#fff',float:'left'}}
                                        src={this.state.src}
                                    />
                                )
                            })
                        }

                        {
                            (this.state.currentIndex == 1) && this.state.audioList.map((item,index)=>{
                                return (
                                    <AudioItem
                                        key={index}
                                        src={this.state.src}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}