import React, { Component } from 'react';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './styles.scss';

import {Switch, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div className="codeloom">
                <Header page="home" />
                
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        );
    }
}
