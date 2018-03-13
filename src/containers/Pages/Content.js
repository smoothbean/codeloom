import React, { Component } from 'react';
import Header from "../Partials/Header/Header";
import "./content.scss";

export default class Content extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="codeloom__content">
                    <div className="codeloom__content__inner">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
