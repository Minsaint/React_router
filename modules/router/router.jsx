import React, { Component } from 'react';
import {render} from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from '../app.jsx';


var route = (
    <HashRouter>
        <App></App>
    </HashRouter>
);
export default route;