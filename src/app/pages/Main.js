/**
 * Created by mapbar_front on 2017/11/18.
 */

import React,{ Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history';
const history = createBrowserHistory;

import HomePage from './home/HomePage.js';
import Login from './Login/Login.js';
import Register from './register/Register.js';
import GetCode from './findPassWord/GetCode.js';
import Audio from './audio/Audio.js';
import Vedio from './vedio/Vedio.js';
//用户相关的路由
import UserInfo from './home/me/userInfo/UserInfo.js';

export default class Main extends Component{
    render(){

        return (
            <Router history={history}>
                <div className="disFx boxSizing" style={{width:"100%",height:'100%',overflow:'hidden'}}>
                    <Switch>

                        {/*<Route path="/setTaskPage/:isEditPage" component={SetTaskPage} />*/}
                        {/*<Route path="/taskContent/:taskSubjectId" component={TaskContent} />*/}
                        {/*<Route path="/relatedCourses" component={RelatedCoursePage} />*/}
                        {/*<Route path="/taskCard/:taskId" component={TaskCardPage} />*/}
                        {/*<Route path="/taskDetail/:id" component={TaskDetailPage} />*/}
                        {/*<Route path="/editTask/:type" component={EditTask} />*/}


                        <Route path="/home" component={HomePage} />
                        <Route path="/audio" component={Audio} />
                        <Route path="/vedio" component={Vedio} />
                        <Route path="/register" component={Register}/>
                        <Route path="/getcode" component={GetCode}/>


                        {/*用户相关的路由*/}
                        <Route path="/userInfo" component={UserInfo} />
                        {/*路由重定向*/}
                        <Route path="/" component={Login}/>
                    </Switch>

                </div>
            </Router>
        )
    }
}