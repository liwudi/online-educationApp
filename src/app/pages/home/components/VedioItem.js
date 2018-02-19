/**
 * Created by mapbar_front on 2018/1/31.
 */
import React,{ Component } from 'react';

export default class AudioItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div
                style={this.props.style}
                className="video-item disFx colCenter marginTop"
                onClick={this.props.onClick || null}
            >
                <div className="fx2">
                    <img className="imgDefault" src={this.props.src} alt=""/>
                </div>
                <div className="fx1">
                    <p className="bigSize colorBlack">中国佛法</p>
                    <div>4星级</div>
                    <div className="disFx space-between">
                        <span className="colorRed">￥398</span>
                        <span className="colorNote">1909人</span>
                    </div>
                </div>
            </div>
        )
    }
}