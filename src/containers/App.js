import React, { Component } from 'react';
import Header from '../containers/Partials/Header';
import Sidebar from '../containers/Partials/Sidebar';
import flexboxgrid from 'flexboxgrid';
import './styles.scss';

export default class App extends Component {
    render() {
        return (
            <div className="codeloom">
                <Header />
            </div>
        );
    }
}
