import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from "classnames";
import Header from "./Header";
import "./styles.scss";

export default class Content extends Component {

    static contextTypes = {
        router: propTypes.object
    };

    onClose() {
        this.context.router.history.push('/');
    }

    render() {
        const baseClass = "codeloom__content";
        var classes = classNames(baseClass, {
            [baseClass+"--hide"]: this.props.hide
        });
        return (
            <div className={classes}>
                <Header title={this.props.title} onClose={this.onClose.bind(this)} />
                <div className="codeloom__content__content">
                    <div className="codeloom__content__content__inner">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
