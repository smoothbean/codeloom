import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import flexboxgrid from 'flexboxgrid';
import "./styles.scss";
import "./queries.scss";

export default class Home extends Component {
    render() {
        return (
            <div className="codeloom__home">
                <div className="codeloom__home__title">codeloom</div>
                <div className="codeloom__home__nav">
                    <div className="codeloom__home__nav__button"><Link to="/about">about</Link></div>
                    <div className="codeloom__home__nav__button"><Link to="/contact">contact</Link></div>
                    <div className="codeloom__home__nav__button codeloom__home__nav__button--last"><Link to="/cv">my CV</Link></div>
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
