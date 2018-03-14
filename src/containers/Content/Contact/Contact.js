import React, { Component } from 'react';
import Input from "../../../components/Input/Input";
import Recaptcha from 'react-recaptcha';
import "./styles.scss";

export default class Contact extends Component {

    render() {
        return (
            <div className="codeloom__content__contact">
                <div className="codeloom__content__contact__title">Send Me An Email</div>
                <div className="codeloom__content__contact__form">
                    <Input type="text" label="Name" icon="person" placeholder="name" classes="codeloom__content__contact__form__input__name" />
                    <Input type="email" label="Email" icon="mail" placeholder="email address" classes="codeloom__content__contact__form__input__email" />
                    <Input type="text" label="Phone Number" icon="phone" placeholder="phone number" classes="codeloom__content__contact__form__input__number" />
                    <Input type="textarea" label="Message" icon="message" rows="4" placeholder="message ..." classes="codeloom__content__contact__form__input__message" />
                </div>
                <div className="codeloom__content__contact__recaptcha">
                    <Recaptcha sitekey="6Ld1o0wUAAAAANdbmuDziLusLpeOEy6H5AUUJZ3h" />
                </div>
            </div>
        );
    }
}
