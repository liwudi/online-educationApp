/**
 * Created by mapbar_front on 2017/9/6.
 */
import React,{ Component } from 'react';
import '../css/common.css';
import ViewForRightDom from './ViewForRightDom';
export default class Modal1 extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div  className="fx1 disFx" style={{flexDirection:"column",backgroundColor:"rgba(0,0,0,0.5)",position:'absolute',left:0,top:0,zIndex:100,width:"100%",height:"100%"}}>
                <div onClick={()=>{this.props.onCancel && this.props.onCancel()}} className="fx1"></div>
                <div className="bgWhite">
                    <p className="center padding">{this.props.type == 1 ? "点击上传图片" : "点击开始录音"}</p>
                    <div className="center marginBottom padding" style={{marginBottom:'20px',position:'relative'}}>

                        <div onClick={()=>this.props.onClick && this.props.onClick()} className="bgred center" style={{width:'70px',height:'70px',borderRadius:'50%',color:'#fff'}}>
                            {this.props.isRecording ? "录音中" : null}
                        </div>
                        {
                            this.props.isComplated?
                                <div style={{position:'absolute',right:"5px",top:"40%"}}
                                     onClick={()=>{this.props.onCancel && this.props.onCancel();this.props.upLoadVoice && this.props.upLoadVoice()}}
                            >
                                完成录音
                            </div>:null
                        }

                    </div>
                </div>
            </div>
        )
    }
}