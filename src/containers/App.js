import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import Content from "./Content/Content";
import About from "./Content/About/About";
import Contact from "./Content/Contact/Contact";
import Cv from "./Content/Cv/Cv";
import "./styles.scss";

import {Switch, Route} from 'react-router-dom';

export default class App extends Component {

    componentWillMount() {
        this.setState({
            navOptions: {
                about: "about",
                contact: "contact",
                cv: "my CV"
            }
        });
    }

    onNavClick(content) {
        // this.setState({ content: content });
    }

    renderNavOptions() {
        let options = this.state.navOptions;
        const optionsLen = Object.keys(options).length;
        return Object.keys(options).map((key, i) => {
            const baseClass = "codeloom__inner__nav__button";
            var classes = classNames(baseClass, {
                [baseClass+"--last"]: optionsLen-1 == i,
            });
            return (
                <Link to={"/"+key} key={options[key]}>
                    <div className={classes}>
                        {options[key]}
                    </div>
                </Link>
            );
        });
    }

    renderContent() {
        return (
            <Content
                title={window.location.pathname.substr(1)}
                hide={window.location.pathname == "/" ? true : false}
            >
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cv" component={Cv}/>
            </Content>
        );
    }

    render() {
        const baseClass = "codeloom__inner__nav";
        var classes = classNames(baseClass, {
            [baseClass+"--hide"]: window.location.pathname != "/"
        });
        return (
            <div className="codeloom">
                <div className="codeloom__header">
                    <div className="codeloom__header__title">codeloom</div>
                </div>

                <div className="codeloom__inner">
                    <div className={classes}>
                        {this.renderNavOptions()}
                    </div>
                    {this.renderContent()}
                </div>

                <div className="codeloom__footer">
                    <div className="codeloom__footer__profile">
                        <div className="codeloom__footer__profile__image"></div>
                        <div className="codeloom__footer__profile__info">
                            <div className="codeloom__footer__profile__info__name">Jack Pywell</div>
                            <div className="codeloom__footer__profile__info__job">Web/Software Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
