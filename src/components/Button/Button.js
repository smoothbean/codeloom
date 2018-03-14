import React, { Component } from 'react';
import classNames from "classnames";
import "./styles.scss";

export default class Button extends Component {
    render() {
        return (
            <button className={"codeloom__button"} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}
