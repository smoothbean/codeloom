import React, { Component } from 'react';
import Header from './Partials/Header/Header';
import Sidebar from './Partials/Sidebar';
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
