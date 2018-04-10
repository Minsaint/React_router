import React, { createElemnt, Component } from 'react';
import {render}  from 'react-dom';
import {Switch, Route} from 'react-router';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Search from './search/search.jsx';
import Type from './type/type.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header></Header> 
                <Switch>
                    <Route path='/type/:id' component={Type}></Route>
                    <Route path='/search/:word' component={Search}></Route>
                    <Route path='/' component={Home}></Route>
                </Switch>
            </div>
        )
    }
}