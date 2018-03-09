import React, { Component } from "react";
import Drawer from '../../components/partials/Drawer.js';
import Tabs from '../../components/partials/Tabs.js';
import { Row, Col } from 'flexboxgrid';
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
            <div className="row">
                <div className="col-md-4">
                    <div className="codeloom__header">pls</div>

                </div>
            </div>
        );
    }
}
