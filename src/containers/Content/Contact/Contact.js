import React, { Component } from 'react';
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./styles.scss";

export default class Contact extends Component {

    componentWillMount() {
        this.setState({
            form: {
                name: {
                    value: "",
                    required: true
                },
                email: {
                    value: "",
                    required: true
                },
                number: {
                    value: "",
                },
                message: {
                    value: "",
                    required: true
                },
            }
        });
    }

    onChange(e) {
        let form = this.state.form;
        form[e.target.name].value = e.target.value;
        this.setState({ form });
    }

    onSubmit() {
        let form = this.state.form;
        let errors = false;

        Object.keys(form).forEach((field) => {
            form[field].error = null;
            if (form[field].required && !form[field].value) {
                errors = true;
                form[field].error = "This field is required";
            } else if (field == "email") {
                if (!this.validateEmail(form[field].value)) {
                    errors = true;
                    form[field].error = "Please enter a valid email";
                }
            } else {
                form[field].error = false;
            }
        });

        if (!errors) {
            this.sendEmail();
        }

        this.setState({ form, submitted: true });
    }

    validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    sendEmail() {
        this.setState({ loading: true });
        fetch('/email', {
            method: 'POST',
            body: JSON.stringify({ form: this.state.form }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then((email) => {
            let form = this.state.form;
            if (email.sent) {
                Object.keys(form).forEach((field) => {
                    form[field].value = "";
                });
            }

            this.setState({ email, loading: false, form });
        });
    }

    renderEmailMessage() {
        if (this.state.email) {
            if (this.state.email.sent) {
                return (
                    <div className="codeloom__content__contact__email__message">
                        <i className="codeloom__content__contact__email__message__icon material-icons">mail</i>
                        <div>Email Sent !</div>
                    </div>
                );
            } else {
                return (
                    <div className="codeloom__content__contact__email__message">
                        <i className="codeloom__content__contact__email__message__icon codeloom__content__contact__email__message__icon--error material-icons">mail</i>
                        <div>Error(s) Occurred While Sending Email !</div>
                    </div>
                );
            }
        }
    }

    render() {
        return (
            <div className="codeloom__content__contact">
                <div className="codeloom__content__contact__title">Send Me An Email</div>
                <div className="codeloom__content__contact__form">
                    <Input
                        type="text"
                        onChange={this.onChange.bind(this)}
                        value={this.state.form.name.value}
                        required={this.state.form.name.required}
                        error={this.state.form.name.error}
                        label="Name"
                        icon="person"
                        placeholder="name"
                        classes="codeloom__content__contact__form__input__name"
                        name="name"
                    />
                    <Input
                        type="email"
                        onChange={this.onChange.bind(this)}
                        value={this.state.form.email.value}
                        required={this.state.form.email.required}
                        error={this.state.form.email.error}
                        label="Email"
                        icon="mail"
                        placeholder="email address"
                        classes="codeloom__content__contact__form__input__email"
                        name="email"
                    />
                    <Input
                        type="text"
                        onChange={this.onChange.bind(this)}
                        value={this.state.form.number.value}
                        error={this.state.form.number.error}
                        label="Phone Number"
                        icon="phone"
                        placeholder="phone number"
                        classes="codeloom__content__contact__form__input__number"
                        name="number"
                    />
                    <Input
                        type="textarea"
                        onChange={this.onChange.bind(this)}
                        value={this.state.form.message.value}
                        required={this.state.form.message.required}
                        error={this.state.form.message.error}
                        label="Message"
                        icon="message"
                        rows="4"
                        placeholder="message ..."
                        classes="codeloom__content__contact__form__input__message"
                        name="message"
                    />
                </div>
                { this.renderEmailMessage() }
                <div className="codeloom__content__contact__submit">
                    <Button onClick={this.onSubmit.bind(this)} text="Send Email" loading={this.state.loading} />
                </div>
            </div>
        );
    }
}
