import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";

import "./styles.scss";

export default class Header extends Component {
    componentWillMount() {
        this.setState({
            navOpen: false
        });
    }

    toggleMobileNav() {
        this.setState({ navOpen: !this.state.navOpen });
    }

    closeNav() {
        this.setState({ navOpen: false });
    }

    renderMobileNav() {
        const baseClass = "codeloom__header__mobile__nav";
        var classes = classNames(baseClass, {
            [baseClass+"--open"]: this.state.navOpen
        });
        return (
            <div className={classes}>
            {this.renderNavOptions(
                [{
                    route: "/",
                    label: "home"
                },
                {
                    route: "/about",
                    label: "about"
                },
                {
                    route: "/contact",
                    label: "contact"
                }],
                "codeloom__header__mobile__nav__button"
            )}
            </div>
        );
    }

    isActive(pathname) {
        if (window.location.pathname == pathname) return "active";
    }

    renderNavOptions(options, baseClass) {
        const optionsLen = options.length;
        return options.map((option, i) => {
            var classes = classNames(baseClass, {
                [baseClass+"--active"]: window.location.pathname == option.route,
                [baseClass+"--last"]: optionsLen-1 == i
            });
            return (
                <div className={classes} key={option.label}>
                    <Link to={option.route}>{option.label}</Link>
                </div>
            );
        });
    }

    render() {
        const baseClass = "codeloom__header__button";
        var classes = classNames(baseClass, "material-icons", {
            [baseClass+"--active"]: this.state.navOpen
        });
        return (
            <div>
                <div className="codeloom__header">
                    <div className="codeloom__header__inner">
                        <div className="codeloom__header__inner__title">codeloom</div>
                        <div className="codeloom__header__inner__nav">
                            {this.renderNavOptions(
                                [{
                                    route: "/",
                                    label: "home"
                                },
                                {
                                    route: "/about",
                                    label: "about"
                                },
                                {
                                    route: "/contact",
                                    label: "contact"
                                }],
                                "codeloom__header__inner__nav__button"
                            )}
                        </div>
                        <i className={classes} onClick={this.toggleMobileNav.bind(this)}>menu</i>
                    </div>
                </div>
                { this.renderMobileNav() }
            </div>
        );
    }
}
