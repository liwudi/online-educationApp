/**
 * Created by mapbar_front on 2018/1/30.
 */
import React, { Component } from 'react';


export default class InputComponent extends Component{
    constructor(props){
        super(props)
    }
    iconRender(){
        if(this.props.type == 'password'){
            return (
                <img style={{width:'20px',height:'20px'}} src={require("../assets/icons/password.png")} alt=""/>
            )
        } else {
            return (
                <img style={{width:'20px',height:'20px'}} src={require("../assets/icons/account.png")} alt=""/>
            )
        }
    }
    render(){
        return (
            <div>
                <div style={this.props.style} className="inputBox rowCenter disFx inputContainer border">
                    <div className="center" style={{width:'40px'}}>
                        {this.iconRender()}
                    </div>
                    <div className="fx1">
                        <input
                            className="inputDefault"
                            type="text"
                            placeholder={this.props.placeholder || "请输入手机号码"} />
                    </div>
                </div>
                <div style={{display: this.props.isShow?'block':'none'}} className="colorRed paddingTop">
                    {this.props.tips || '用户输入不符合规则'}
                </div>
            </div>

        )
    }
}