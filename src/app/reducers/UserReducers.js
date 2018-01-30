/**
 * Created by mapbar_front on 2017/11/18.
 */
import { TYPES } from '../actions/index';

const LOGIN_STATE = {
    isLogged: false,
    userInfo: {},
    error: {},
    status: TYPES.LOGGED_NULL
};

export function userStore(state=LOGIN_STATE,action){
    switch (action.type){
        case TYPES.LOGGED_IN:
            return Object.assign(LOGIN_STATE,{
                taskContent:action.taskContent
            });
            break;
        default:
            return state
    }
}