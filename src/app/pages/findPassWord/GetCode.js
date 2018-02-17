/**
 * Created by mapbar_front on 2018/2/17.
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
    getCodeEvent(){
        alert('获取验证码');
        //this.props.history.push('/home')
    }
    goPage(page){
        this.props.history.push(page)
    }
    render(){
        return (
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner title="获取验证码" router={this.props.history} />
                <div className="fx1 boxSizing padding colCenter" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>

                    <InputComponent
                        isShow={this.state.showPhoneTips}
                    />

                    <Button
                        style={{marginTop: '20px',borderRadius:'5px',width: '100%', height:'45px'}}
                        title="获取验证码"
                        onClick={()=>this.getCodeEvent()}
                    />

                    <div className="disFx marginTop" style={{justifyContent:'space-between'}}>
                        <div
                            className="note"
                            onClick={()=>this.goPage('/login')}
                        >注册即表示同意<a>&lt;&lt;教育服务协议&gt;&gt;</a></div>
                    </div>

                </div>
            </div>
        )
    }
}