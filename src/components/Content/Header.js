import React, { Component } from 'react';
import classNames from "classnames";
import "./styles.scss";

export default class Header extends Component {

    render() {
        return (
            <div className="codeloom__content__header">
                <i className="codeloom__content__header__close material-icons" onClick={this.props.onClose}>close</i>
                <div className="codeloom__content__header__title">{this.props.title}</div>
            </div>
        );
    }
}
