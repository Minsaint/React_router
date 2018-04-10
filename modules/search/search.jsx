import React, { Component } from 'react';
import Conf from '../conf/conf.jsx';
import Mixin from '../mixin/mixin.jsx';

export default class Search extends Mixin {
    dataFilter(text) {
        console.log(text)
        var list = [];
        Conf.BASIC.forEach((item, index) => {
            for (let i in item) {
                if (item[i].indexOf(text) >= 0) {
                    list.push(item);
                    break;
                }
            }
        })
        this.setState({list});
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.dataFilter(this.props.match.params.word);
    }
    componentWillReceiveProps(newProp, newState) {
        this.dataFilter(newProp.match.params.word);
    }
}