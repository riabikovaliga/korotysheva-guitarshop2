import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Input = ({className, onInputChange, value, name, min, max, placeholder}) => {
    const [currentValue, setCurrentValue] = useState(value);

    const onValueChange = (target) => {
        if (target === '') {
            return setCurrentValue('');
        }
        return setCurrentValue(Number.parseFloat(target) >= 0 ? Number.parseFloat(target) : value);
    };

    const onBlur = () => {
        if (currentValue === '')  {
            return onInputChange(currentValue);
        } else if (currentValue > max) {
            setCurrentValue(max);
            return onInputChange(max);
        } else if (currentValue < min) {
            setCurrentValue(min);
            return onInputChange(min);
        }
        return onInputChange(currentValue);
    };

    return (
        <label className={`${className} input`}>
            <NumberFormat className="input__block"
                          onBlur={onBlur}
                          thousandSeparator={' '}
                          value={currentValue}
                          name={name}
                          placeholder={placeholder}
                          onValueChange={(evt) => onValueChange(evt.value)}/>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    placeholder: PropTypes.string,
};

export {Input};
