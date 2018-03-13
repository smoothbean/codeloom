import React, { Component } from 'react';
import Header from './Partials/Header/Header';
import Sidebar from './Partials/Sidebar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import './styles.scss';

import {Switch, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div className="codeloom">
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        );
    }
}
