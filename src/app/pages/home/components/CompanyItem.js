/**
 * Created by mapbar_front on 2018/1/31.
 */
import React,{ Component } from 'react';

export default class CompanyItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="company-item disFx colCenter">
                <div className="fx2">
                    <img className="imgDefault" src={this.props.src} alt=""/>
                </div>
                <div className="fx1">
                    <p className="bigSize colorBlack">中国佛法</p>
                    <p className="smallSize colorNote">我们的叹息，我是中国人，我们的叹息，我是中国人，我们的叹息，我是中国人。</p>
                </div>
            </div>
        )
    }
}