/**
 * Created by mapbar_front on 2018/1/30.
 */
import React,{ Component } from 'react';

import TopBanner from '../../components/TopBanner';


export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="pageBox" style={{position:'relative'}}>
                <TopBanner title="首页" router={this.props.history} />
                <div className="fx1 boxSizing center" style={{overflow:'auto',borderTop:'1px solid #cccccc'}}>
                    123
                </div>
            </div>
        )
    }
}