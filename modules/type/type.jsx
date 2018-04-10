import React, { Component } from 'react';
import Conf from '../conf/conf.jsx';
import Mixin from '../mixin/mixin.jsx';


export default class Type extends Mixin {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.dataFilter(this.props.match.params.id);
    }
    componentWillReceiveProps(newProp, newState) {
        this.dataFilter(newProp.match.params.id);
        
    }
}