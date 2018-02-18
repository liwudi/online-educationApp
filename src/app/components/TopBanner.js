/**
 * Created by mapbar_front on 2017/9/5.
 */
import React,{ Component } from 'react';
import '../css/common.css';
export default class TopBanner extends Component{
    constructor(props){
        super(props);
    }
    goBack(){
        this.props.router && this.props.router.goBack();
    }
    leftView(){
        if(this.props.leftView){
            return this.props.leftView();
        }else{
            return (
                <div onClick={() => this.goBack()} className="topBannerLeft center" >
                    <img style={{width:'25px',height:'25px'}} src={require("../assets/icons/back.png")} />
                </div>
            )

        }

    }
    rightView(){
        if(this.props.rightView){
            return this.props.rightView();
        }else {
            return null
        }
    }
    render(){
        return (
            <div style={this.props.style} className='topBanner rowCenter bgred'>
                {this.leftView()}
                <span className="fx1 center">
                    {this.props.title?this.props.title:"默认标题"}
                </span>
                {this.rightView()}
            </div>
        )
    }
}