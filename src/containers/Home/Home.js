import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import Content from "../Content/Content";
import About from "../Content/About/About";
import Contact from "../Content/Contact/Contact";
import Cv from "../Content/Cv/Cv";
import "./styles.scss";

export default class Home extends Component {

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
        this.setState({ content: content });
    }

    closeContent() {
        this.setState({ content: false });
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
                <div className={classes} key={options[key]} onClick={this.onNavClick.bind(this, key)}>{options[key]}</div>
            );
        });
    }

    renderContent() {
        return (
            <Content
                title={this.state.navOptions[this.state.content]}
                onClose={this.closeContent.bind(this)}
                hide={!this.state.content ? true : false}
                >
                {this.renderContentChildComponent()}
            </Content>
        );
    }

    renderContentChildComponent() {
        if (this.state.content) {
            switch (this.state.content) {
                case "about":
                    return(
                        <About />
                    );
                case "contact":
                    return(
                        <Contact />
                    );
                case "cv":
                    return(
                        <Cv />
                    );
            }
        }
    }

    render() {
        const baseClass = "codeloom__inner__nav";
        var classes = classNames(baseClass, {
            [baseClass+"--hide"]: this.state.content
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
