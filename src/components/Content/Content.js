import React, { Component } from 'react';
import classNames from "classnames";
import Header from "./Header";
import "./styles.scss";

export default class Content extends Component {

    render() {
        const baseClass = "codeloom__content";
        var classes = classNames(baseClass, {
            [baseClass+"--hide"]: this.props.hide
        });
        return (
            <div className={classes}>
                <Header title={this.props.title} onClose={this.props.onClose} />
                <div className="codeloom__content__inner"></div>
            </div>
        );
    }
}
