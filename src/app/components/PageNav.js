/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';

export default class InputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    renderIcons(){
        if(this.props.title == '视频区'){
            return (
                <img
                    className="iconDefault" style={{width: '25px',height: '25px'}}
                    src={require('../assets/icons/vedio.png')}
                    alt=""
                />
            )
        } else if(this.props.title == '音频区'){
            return (
                <img
                    className="iconDefault" style={{width: '25px',height: '25px'}}
                    src={require('../assets/icons/audio.png')}
                    alt=""
                />
            )
        }

    }
    render(){
        return (
            <div style={this.props.style} className="disFx space-between page-nav">
                <div className="disFx rowCenter">
                    {
                        this.renderIcons()
                    }
                    <span className="marginLeft">{this.props.title}</span>
                </div>
                <img className="iconDefault" src={require('../assets/myicon/more.png')} alt=""/>

            </div>
        )
    }
}