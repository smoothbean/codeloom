import React, { Component } from 'react';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';
import Main from './Main';
import './styles.scss';

import {Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}
