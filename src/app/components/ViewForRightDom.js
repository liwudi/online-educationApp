/**
 * Created by mapbar_front on 2017/9/5.
 */
import React,{ Component } from 'react';
import '../css/common.css';

export default class ViewForRightDom extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.content
        }
    }
    clickEvent(){
        this.props.onClick && this.props.onClick();
    }
    changeEvent(e){
        this.setState({
            value: e.target.value
        })
    }
    renderRight(){
        if(this.props.rightView){
            return this.props.rightView();
        }else{
            return (
                <input
                    className="inputDefault colorNote"
                    onChange={(e)=>this.changeEvent(e)}
                    value={this.state.value} />
            )
        }
    }
    render(){
        return (
            <div
                style={this.props.style}
                onClick={()=>{this.clickEvent()}}
                className="viewForRightArrow bgWhite disFx rowCenter"
            >
                <p className="marginLeft">{this.props.title ? this.props.title : '作业标题'}</p>
                <div className="marginRight marginLeft fx1">
                    {
                        this.renderRight()
                    }
                </div>

            </div>
        )
    }
}