import React, { Component } from "react";
import classNames from "classnames";
import "./styles.scss";
import Loader from "react-loaders";

export default class Button extends Component {
    render() {
        if (this.props.loading) {
            return (
                <button className={"codeloom__button codeloom__button--loading"} onClick={this.props.onClick}>
                    <Loader type="ball-pulse" />
                </button>
            )
        }
        return (
            <button className={"codeloom__button"} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}
