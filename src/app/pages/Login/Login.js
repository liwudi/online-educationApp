/**
 * Created by mapbar_front on 2018/1/30.
 */
import React,{ Component } from 'react';

import TopBanner from '../../components/TopBanner';
import InputComponent from '../../components/InputComponent';
import Button from '../../components/Button.js'

export default class Login extends Component{
    constructor(props){
        super(props)
    }
    loginEvent(){
        this.props.history.push('/home')
    }
    render(){
        return (
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner title="登录" router={this.props.history} />
                <div className="fx1 boxSizing padding colCenter" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>

                    <div className="inputBox rowCenter disFx inputContainer border">
                        <div className="center" style={{width:'40px'}}>
                            <img style={{width:'20px',height:'20px'}} src={require("../../assets/images/leftArrow.png")} alt=""/>
                        </div>
                        <div className="fx1">
                            <input className="inputDefault" type="text" placeholder="请输入手机号码" />
                        </div>
                    </div>
                    <InputComponent
                        placeholder="请输入用户密码"
                        style={{marginTop: '20px'}}
                    />

                    <Button
                        style={{marginTop: '20px',borderRadius:'5px',width: '100%', height:'45px'}}
                        onClick={()=>this.loginEvent()}
                    />

                    <div className="disFx marginTop" style={{justifyContent:'space-between'}}>
                        <div className="note">注册</div>
                        <div className="note">忘记密码</div>
                    </div>

                </div>
            </div>
        )
    }
}