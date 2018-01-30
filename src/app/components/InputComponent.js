/**
 * Created by mapbar_front on 2018/1/30.
 */
import React, { Component } from 'react';


export default class InputComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={this.props.style} className="inputBox rowCenter disFx inputContainer border">
                <div className="center" style={{width:'40px'}}>
                    <img style={{width:'20px',height:'20px'}} src={require("../assets/images/leftArrow.png")} alt=""/>
                </div>
                <div className="fx1">
                    <input
                        className="inputDefault"
                        type="text"
                        placeholder={this.props.placeholder || "请输入手机号码"} />
                </div>
            </div>
        )
    }
}