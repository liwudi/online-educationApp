/**
 * Created by mapbar_front on 2018/1/31.
 */
import React, { Component } from 'react';


export default class InputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }
    changeEvent(e){
        var value = e.target.value;
        this.setState({
            value
        })
        this.props.getValue && this.props.getValue(value);
    }
    searchEvent(){
        this.props.searchEvent && this.props.searchEvent();
    }
    render(){
        return (
            <div className="search-container rowCenter border paddingSmall">
                <img
                    onClick={()=>this.searchEvent()}
                    className="searchIcon"
                    src={require('../assets/myicon/search.png')}
                    alt=""/>
                <input
                    value={this.state.value}
                    onChange={(e)=>this.changeEvent(e)}
                    placeholder="请输入搜索内容"
                    style={{backgroundColor:'#eeeeee'}}
                    className="inputDefault marginLeft"
                    type="text"/>
            </div>
        )
    }
}