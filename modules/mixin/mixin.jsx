import React, { Component } from 'react';
import Conf from '../conf/conf.jsx';
import mixinless from './mixin.less';

// import { Link } from 'react-router-dom';


export default class Mixin extends Component {
    constructor() {
        super();
        this.state = {
            list: Conf.BASIC
        }
    }
    dataFilter(type) {
        // 过滤状态数据
        var list = Conf.BASIC.filter((obj, index) => obj.type === type)
        this.setState({ list })
        console.log(list)
    }
    creatlist() {
        return this.state.list.map((obj, index) => {
            return (
                <li key={index} style={{
                    background: `url("img/item/item${parseInt(Math.random() * 33)}.jpg")`
                }}>
                    <a href={obj.site}>
                        <div className="content">
                            <p className="title">{obj.name}</p>
                        </div>
                        <div className="cover">
                            <p>{'公司:' + obj.company}</p>
                            <p>{'类型:' + obj.type}</p>
                            <p>{'描述:' + obj.description}</p>
                        </div>
                    </a>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="show">
                <div className="container">
                    <ul>{this.creatlist()}</ul>
                </div>
            </div>
        )
    }
}
