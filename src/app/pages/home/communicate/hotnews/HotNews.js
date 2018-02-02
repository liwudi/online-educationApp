/**
 * Created by mapbar_front on 2018/2/1.
 */
import React, { Component } from 'react';

export default class HotNews extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="wrapper center" style={{flexWrap:'wrap'}}>
                <div className="hotNewItemBox center">
                    <img className="portrait" src="http://img4.imgtn.bdimg.com/it/u=3072179795,3417007605&fm=27&gp=0.jpg" alt=""/>
                    <div className="newItemContent paddingTop">
                        <p>weixin_故事还没有完</p>
                        <p className="colorNote baseSize">18小时前</p>
                        <p className="smallSize">学习完***课程，这是我的感悟，大家有什么要说的，欢迎大家指导。</p>
                        <div>
                            <img className="imgDefault" src="http://img1.imgtn.bdimg.com/it/u=3704589992,266234363&fm=27&gp=0.jpg" alt="图片"/>
                        </div>
                    </div>
                </div>

                <div className="hotNewItemBox center">
                    <img className="portrait" src="http://img4.imgtn.bdimg.com/it/u=3072179795,3417007605&fm=27&gp=0.jpg" alt=""/>
                    <div className="newItemContent paddingTop">
                        <p>weixin_故事还没有完</p>
                        <p className="colorNote baseSize">18小时前</p>
                        <p className="smallSize">学习完***课程，这是我的感悟，大家有什么要说的，欢迎大家指导。</p>
                        <div>
                            <img className="imgDefault" src="http://img1.imgtn.bdimg.com/it/u=3704589992,266234363&fm=27&gp=0.jpg" alt="图片"/>
                        </div>
                    </div>
                </div>

                <div className="hotNewItemBox center">
                    <img className="portrait" src="http://img4.imgtn.bdimg.com/it/u=3072179795,3417007605&fm=27&gp=0.jpg" alt=""/>
                    <div className="newItemContent paddingTop">
                        <p>weixin_故事还没有完</p>
                        <p className="colorNote baseSize">18小时前</p>
                        <p className="smallSize">学习完***课程，这是我的感悟，大家有什么要说的，欢迎大家指导。</p>
                        <div>
                            <img className="imgDefault" src="http://img1.imgtn.bdimg.com/it/u=3704589992,266234363&fm=27&gp=0.jpg" alt="图片"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}