import React, { Component } from 'react';
import header_less from './header.less';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    creatlist() {
        let arr = [
            { text: '视频', type: 'movie' },
            { text: '游戏', type: 'games' },
            { text: '新闻', type: 'news' },
            { text: '体育', type: 'sports' },
            { text: '购物', type: 'buy' },
            { text: '社交', type: 'friends' },
        ]
        return arr.map((obj, index) => {
            return <li role="presentation" key={index} data-type={obj.type}><Link to={`/type/${obj.type}`}>{obj.text}</Link></li>
        })
    }
    getVal(e) {
        if (e.keyCode === 13) {
            location.hash = '/search/' + e.target.value;
            // 清空输入框
            e.target.value = '';
        }
    }
    render() {
        return (
            <div className="header">
                <div className="full-container">
                    <div className="container">
                        <Link to='/'><div className="logo"><img src="img/logo.png" width="50px" alt="" /></div></Link>
                        <ul className="nav nav-pills nav-justified">
                            {this.creatlist.bind(this)()}
                        </ul>
                        <div className="search"><input className="form-control" onKeyUp={this.getVal.bind(this)} placeholder="请输入查找内容" type="text" /></div>
                    </div>
                </div>
                <div className="banner"></div>
            </div>
        )
    }

}