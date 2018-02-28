import React, { Component } from "react";

import "./styles.scss";

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 codeloom__header">
                    <div className="codeloom__header__main">codeloom</div>
                    <div className="row codeloom__header__nav">
                        <div className="col-lg-5 codeloom__header__nav__user">Jack Pywell</div>
                        <div className="col-lg-7 codeloom__header__nav__buttons">
                            <div className="codeloom__header__nav__button">home</div>
                            <div className="codeloom__header__nav__button">about me</div>
                            <div className="codeloom__header__nav__button">contact me</div>
                        </div>
                    </div>
            </div>

            </div>

        );
    }
}
