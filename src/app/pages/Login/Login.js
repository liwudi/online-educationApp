/**
 * Created by mapbar_front on 2018/1/30.
 */
import React,{ Component } from 'react';

import TopBanner from '../../components/TopBanner';
import InputComponent from '../../components/InputComponent';
import Button from '../../components/Button.js'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPhoneTips: false,
            showPsdTips: false
        }
    }
    loginEvent(){
        this.props.history.push('/home')
    }
    registerEvent(){
        this.props.history.push('/register')
    }
    goPage(page){
        this.props.history.push(page)
    }
    render(){
        return (
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner title="登录" router={this.props.history} />
                <div className="fx1 boxSizing padding colCenter" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>

                    <InputComponent
                        isShow={this.state.showPhoneTips}
                    />
                    <InputComponent
                        placeholder="请输入用户密码"
                        type="password"
                        style={{marginTop: '20px'}}
                        isShow={this.state.showPsdTips}
                        tips="用户密码应该是6到10位的数字或者字母"
                    />

                    <Button
                        style={{marginTop: '20px',borderRadius:'5px',width: '100%', height:'45px'}}
                        onClick={()=>this.loginEvent()}
                    />

                    <div className="disFx marginTop" style={{justifyContent:'space-between'}}>
                        <div
                            className="note"
                            onClick={()=>this.registerEvent()}
                        >注册</div>
                        <div className="note"
                            onClick={()=>this.goPage('/getcode')}
                        >忘记密码</div>
                    </div>

                </div>
            </div>
        )
    }
}