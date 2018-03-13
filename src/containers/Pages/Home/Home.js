import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import flexboxgrid from 'flexboxgrid';
import classNames from "classnames";
import "./styles.scss";

export default class Home extends Component {
    renderNavOptions(options) {
        const optionsLen = options.length;
        return options.map((option, i) => {
            const baseClass = "codeloom__home__nav__button";
            var classes = classNames(baseClass, {
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
        return (
            <div className="codeloom__home">
                <div className="codeloom__home__title">codeloom</div>
                <div className="codeloom__home__nav">
                    {this.renderNavOptions(
                        [{
                            route: "/about",
                            label: "about"
                        },
                        {
                            route: "/contact",
                            label: "contact"
                        },
                        {
                            route: "/cv",
                            label: "my CV"
                        }]
                    )}
                </div>
                <div className="codeloom__home__profile">
                    <div className="codeloom__home__profile__image"></div>
                    <div className="codeloom__home__profile__info">
                        <div className="codeloom__home__profile__info__name">Jack Pywell</div>
                        <div className="codeloom__home__profile__info__job">Software Developer</div>
                    </div>
                </div>
            </div>
        );
    }
}
