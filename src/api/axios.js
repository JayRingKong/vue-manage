import axios from 'axios'

import config from '../config'

const baseUrl = process.env.NoDE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;


class httpRequest {
    //创建传入一url
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    //返回默认配置 baseUrl 和头
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            console.log('出错了');
            return Promise.reject(error);
        });
    }

    request(options){

        // 创建一个axios类
        const instance = axios.create() 

        options = {...this.getInsideConfig(),...options }
        
        this.interceptors(instance)
        //返回一个创建一个axios类实例对象
        return instance(options)
    }
}
export default new httpRequest(baseUrl)