import React, { Component } from 'react';
import classNames from "classnames";
import "./styles.scss";

export default class Input extends Component {

    renderIcon() {
        if (this.props.icon) {
            return (
                <i className="input__icon material-icons">{this.props.icon}</i>
            );
        }
    }

    renderError() {
        if (this.props.error) {
            return (
                <div className="input__error">{this.props.error}</div>
            );
        }
    }

    renderRequired() {
        if (this.props.required) return <div className="input__label__required"> *</div>
    }

    render() {
        let {
           disabled,
           type,
           label,
           placeholder,
           onChange,
           rows,
           icon,
           classes,
           value,
           name
       } = this.props;

        const baseClass = "input__input";
        const inputClasses = classNames(baseClass, baseClass + "--" + type);

        const groupBaseClass = "input";
        const groupClass = classNames(groupBaseClass, {
            [groupBaseClass + "--disabled"]: disabled,
        });

       if (type == "textarea") {
           return (
               <div className={groupClass+" "+classes}>
                   <label className="input__label">
                        { this.renderIcon() }
                        { label }
                        { this.renderRequired() }
                    </label>
                   <textarea className={inputClasses} disabled={disabled} placeholder={placeholder} onChange={onChange} rows={rows} value={value} name={name} />
                   {this.renderError()}
               </div>
           );
       }

        return (
            <div className={groupClass+" "+classes}>
                <label className="input__label">
                    { this.renderIcon() }
                    { label }
                    { this.renderRequired() }
                 </label>
                <input className={inputClasses} type={type} disabled={disabled} placeholder={placeholder} onChange={onChange} value={value} name={name} />
                {this.renderError()}
            </div>
        );
    }
}
