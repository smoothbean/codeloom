import React, { Component } from 'react';
import Loader from "react-loaders";
import "./styles.scss";

export default class Cv extends Component {

    componentWillMount() {
        this.setState({ loading: true });
        // fetch('/downloadCv')
        // .then(res => res.json())
        // .then((res) => {
        //     this.setState({ download: res.url, loading: false });
        // });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="codeloom__content__cv__loading">
                    <div className="codeloom__content__cv__loading__inner">
                        <Loader type="line-scale" />
                        <div className="codeloom__content__cv__loading__inner__text">loading content...</div>
                    </div>
                </div>
            );
        }
        return (
            <div className="codeloom__content__cv">
                <div onClick={ this.downloadCv.bind(this) }>downloadCv</div>
            </div>
        );
    }
}
