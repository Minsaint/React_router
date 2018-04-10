import React, { createElemnt, Component } from 'react';

/*
 * @imgArr   需要处理的图片地址数组
 * @success  每张图片加载成功执行的回调函数
 * @fail     每张图片加载失败执行的回调函数
 * @done     所有图片加载成功后执行的回调函数
 */
export default class Imageloader  {
    constructor(imgArr, success, fail, done) {
      this.imgArr = imgArr;
      this.success = success;
      this.fail = fail;
      this.done = done;
      this.sum = imgArr.length;
      this.count = 0;
        this.loader();
    }
    loader() {
        // 循环数组,创建
        for(let i = 0; i < this.imgArr.length; i++) {
            var img = new Image();
            // 监听加载事件
            img.onload = () => {
                this.count++;
                this.success && this.success(this.count);
                if (this.count === this.sum) {
                    this.done && this.done(this.count)
                }

            }
            // 图片加载失败时也要计数
            img.onerror = () => {
                this.count++;
                this.success && this.success(this.count);
                if (this.count === this.sum) {
                    this.done && this.done(this.count)
                }

            }
            // 开始加载图片
            img.src = this.imgArr[i];
        }
    }
}