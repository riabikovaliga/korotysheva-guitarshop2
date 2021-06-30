import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({className, value, onChange, label, disabled = false}) => {
    return (
        <label className={`${className} input-checkbox`}>
            <input
                onChange={(evt) => onChange(evt.target.checked)}
                type="checkbox"
                disabled={disabled}
                checked={value}/>
            <span>
                &nbsp;{label}
            </span>
        </label>
    );
};

InputCheckbox.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

export {InputCheckbox};
