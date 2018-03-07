import React, { Component } from "react";
import MatDrawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
const enhanceWithClickOutside = require('react-click-outside');

class Drawer extends Component {
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside() {
        this.props.close();
    }

    render() {
        return (
            <div />
        );
    }
}

export default enhanceWithClickOutside(Drawer);
