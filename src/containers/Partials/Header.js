import React, { Component } from "react";
import Drawer from '../../components/partials/Drawer.js';
import Tabs from '../../components/partials/Tabs.js';
import { Link } from 'react-router-dom';

import "./styles.scss";

export default class Header extends Component {
    componentWillMount() {
        this.setState({
            drawerOpen: false
        });
    }

    handleNavClick() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    closeNav() {
        this.setState({ drawerOpen: false });
    }

    isActive(pathname) {
        if (window.location.pathname == pathname) return "active";
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo center">Codeloom</Link>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className={this.isActive("/")}><Link to="/">home</Link></li>
                            <li className={this.isActive("/about")}><Link to="/about">about me</Link></li>
                            <li className={this.isActive("/contact")}><Link to="/contact">contact</Link></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li className={this.isActive("/")}><Link to="/">home</Link></li>
                            <li className={this.isActive("/about")}><Link to="/about">about me</Link></li>
                            <li className={this.isActive("/contact")}><Link to="/contact">contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
