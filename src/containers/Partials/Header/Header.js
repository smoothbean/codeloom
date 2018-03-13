import React, { Component } from "react";
import flexboxgrid from 'flexboxgrid';
import { Link } from 'react-router-dom';
import classNames from "classnames";

import "./styles.scss";
import "./queries.scss";

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
            {this.renderMobileNavOptions(
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
                }]
            )}
            </div>
        );
    }

    isActive(pathname) {
        if (window.location.pathname == pathname) return "active";
    }

    renderMobileNavOptions(options) {
        const optionsLen = options.length;
        return options.map((option, i) => {
            const baseClass = "codeloom__header__mobile__nav__button";
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
                            <div className="codeloom__header__inner__nav__button"><Link to="/">home</Link></div>
                            <div className="codeloom__header__inner__nav__button"><Link to="/about">about</Link></div>
                            <div className="codeloom__header__inner__nav__button"><Link to="/contact">contact</Link></div>
                        </div>
                        <i className={classes} onClick={this.toggleMobileNav.bind(this)}>menu</i>
                    </div>
                </div>
                { this.renderMobileNav() }
            </div>
        );
    }
}
