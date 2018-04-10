import app_less from '../css/app.less';
import React, { createElemnt, Component } from 'react';
import { render } from 'react-dom';
import ImageLoader from './imageloader/imageloader.jsx';
import Imageloader from './imageloader/imageloader.jsx';
import * as axios from 'axios';
import CONF from './conf/conf.jsx';
import route from './router/router.jsx';

// 整理图片
var imgArr = [];
for (let i = 0; i < 33; i++) {
    if (i < 2) {
        imgArr.push(`img/banner/banner${i}.jpg`);
    } else {
        imgArr.push(`img/item/item${i}.jpg`);
    }
}
// 获取计数容器
var dom = document.querySelector('.text span');
new Imageloader(
    imgArr,
    (count) => {
        dom.innerHTML = (count / imgArr.length * 100).toFixed(2);
    },
    (count) => {
        dom.innerHTML = (count / imgArr.length * 100).toFixed(2);
    },
    // 图片加载完成
    (count) => {
        dom.innerHTML = '100';
        // 请求数据
        axios
            .get('data/sites.json')
            .then(({ data }) => {
                // 存储数据
                CONF.BASIC = data.data;
                // 渲染视图
                render(route, document.getElementById('app'));
            })
        
    })
