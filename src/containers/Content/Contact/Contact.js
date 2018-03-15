import React, { Component } from 'react';
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Recaptcha from 'react-recaptcha';
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
        this.sendEmail();
        let form = this.state.form;
        let errors = false;
        let loading = false;

        Object.keys(form).forEach((field) => {
            if (form[field].required && !form[field].value) {
                errors = true;
                form[field].error = "This field is required";
            } else {
                form[field].error = false;
            }
        });

        if (!errors && this.state.human) {
            loading = true;
            this.sendEmail();
        }

        this.setState({ form, submitted: true, loading });
    }

    sendEmail() {
        this.setState({ loading: true });

        let form = {
            name: {
                value: "guy man",
            },
            email: {
                value: "meme@test.net",
            },
            number: {
                value: "pls",
            },
            message: {
                value: "hi there, wanna get down ?",
            },
        };

        fetch('/email', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify({smeg: cheese}),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
            .then(res => res.json())
            .then((email) => {
                console.log(email);
                this.setState({ loading: false });
            });

    }

    googleVerify() {
        this.setState({ human: true });
    }

    renderRecaptchaError() {
        if (this.state.submitted && !this.state.human) {
            return (
                <div className="codeloom__content__contact__recaptcha__error">Are you human ?</div>
            );
        }
    }

    render() {
        console.log(this.state.loading);
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
                        label="Name" icon="person"
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
                        label="Email" icon="mail"
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
                <div className="codeloom__content__contact__recaptcha">
                    <Recaptcha sitekey="6Ld1o0wUAAAAANdbmuDziLusLpeOEy6H5AUUJZ3h" verifyCallback={this.googleVerify.bind(this)} />
                    { this.renderRecaptchaError() }
                </div>
                <div className="codeloom__content__contact__submit">
                    <Button onClick={this.onSubmit.bind(this)} text="Send Email" />
                </div>
            </div>
        );
    }
}
