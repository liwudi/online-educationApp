/**
 * Created by mapbar_front on 2017/11/18.
 */
import RequestService from './BaseService.js';
import urlConfig from '../config/urlConfig.js';

const serviceUrl = urlConfig.server;

import { ajax } from './BaseService';

function makeUrl(url) {
    if(url){
        return serviceUrl + url
    }
    return serviceUrl;

}

export function getTaskSubjectList(page,rows) {

    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/getTaskSubjectList'),
            data:{
                page:page || 1,
                rows:rows || 10
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}

export function getClass() {
    return RequestService.get('http://datainfo.duapp.com/shopdata/getclass.php',{})
}