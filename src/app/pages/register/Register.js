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
            phone:'',
            password:'',
            showPhoneTips: false,
            showPsdTips: false
        }
    }
    loginEvent(){
        this.props.history.goBack();
        //this.props.history.push('/login')
    }
    registerEvent(){
        this.testPhone();
        this.testPsd();
        setTimeout(()=>{
            console.log(this.state.showPhoneTips,this.state.showPsdTips);
            if(!this.state.showPhoneTips && !this.state.showPsdTips){
                alert('调用注册接口');
                this.loginEvent();
            }
        },200)

    }
    testPhone(){
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!reg.test(this.state.phone)){
            this.setState({
                showPhoneTips: true
            })
        } else {
            this.setState({
                showPhoneTips: false
            })
        }
    }
    testPsd(){
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
        if(!reg.test(this.state.password)){
            this.setState({
                showPsdTips: true
            })
        } else {
            this.setState({
                showPsdTips: false
            })
        }
    }
    getPhone(value){
        this.setState({
            phone: value
        })
    }
    getPsd(value){
        this.setState({
            password: value
        })
    }
    render(){
        return (
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner title="注册" router={this.props.history} />
                <div className="fx1 boxSizing padding colCenter" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>

                    <InputComponent
                        isShow={this.state.showPhoneTips}
                        onChange={(value)=>{this.getPhone(value)}}
                    />

                    <InputComponent
                        placeholder="请输入用户密码"
                        style={{marginTop: '20px'}}
                        type="password"
                        onChange={(value)=>{this.getPsd(value)}}
                        isShow={this.state.showPsdTips}
                    />

                    <Button
                        style={{marginTop: '20px',borderRadius:'5px',width: '100%', height:'45px'}}
                        title="注册"
                        onClick={()=>this.registerEvent()}
                    />

                    <div className="disFx marginTop" style={{justifyContent:'space-between'}}>
                        <div
                            className="note"
                            onClick={()=>this.loginEvent()}
                        >已有账号？返回登录？</div>
                    </div>

                </div>
            </div>
        )
    }
}