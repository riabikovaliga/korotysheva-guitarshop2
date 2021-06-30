import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({className, onInputChange, value, name, label, error = false}) => {
    return (
        <label className={`${className} ${!!error && 'input--error'} input`}>
            <input onChange={(evt) => onInputChange(evt.target.value)} className="input__block"
                   value={value} name={name} type="text"/>
            <span className="input__label">
              {label || error}
            </span>
        </label>
    );
};

InputText.propTypes = {
    className: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};

export {InputText};
