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

    render() {
        let {
           disabled,
           type,
           label,
           placeholder,
           size,
           onChange,
           inline,
           rows,
           icon,
           classes
       } = this.props;

        const baseClass = "input__input";
        const inputClasses = classNames(baseClass, baseClass + "--" + type);

        const groupBaseClass = "input";
        const groupClass = classNames(groupBaseClass, {
            [groupBaseClass + "--inline"]: inline,
            [groupBaseClass + "--" + size]: size,
            [groupBaseClass + "--disabled"]: disabled,
        });

       if (type == "textarea") {
           return (
               <div className={groupClass+" "+classes}>
                   <label className="input__label">
                        { this.renderIcon() }
                        { label }
                    </label>
                   <textarea className={inputClasses} disabled={disabled} placeholder={placeholder} onChange={onChange} rows={rows} />
               </div>
           );
       }

        return (
            <div className={groupClass+" "+classes}>
                <label className="input__label">
                    { this.renderIcon() }
                    { label }
                 </label>
                <input className={inputClasses} type={type} disabled={disabled} placeholder={placeholder} onChange={onChange} />
            </div>
        );
    }
}
