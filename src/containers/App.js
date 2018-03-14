import React, { Component } from 'react';
import Home from './Home/Home';
import './styles.scss';

import {Switch, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Home />
        );
    }
}
