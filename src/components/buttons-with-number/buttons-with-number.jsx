import PropTypes from 'prop-types';
import React, {useState} from 'react';

const NamesButton = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
};

const ButtonsWithNumber = ({className, onChange, value}) => {
    const [currentValue, setCurrentValue] = useState(value);

    const onBlur = () => {
        setCurrentValue(currentValue > 0 ? currentValue : value);
        return onChange(currentValue >= 0 ? currentValue : value);
    };

    const onValueChange = (target) => {
        switch (target) {
            case NamesButton.MINUS:
                currentValue > 1 && setCurrentValue(Number(currentValue) - 1);
                return onChange(Number(currentValue) - 1);
            case NamesButton.PLUS:
                setCurrentValue(Number(currentValue) + 1);
                return onChange(Number(currentValue) + 1);
            default:
                return setCurrentValue(target);
        }
    };

    return (
        <div className={`buttons-with-number ${className}`}>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="buttons-with-number__button buttons-with-number__button--minus" name={NamesButton.MINUS}>−</button>
            <input value={currentValue}
                   onBlur={onBlur}
                   onChange={(evt) => onValueChange(evt.target.value)}
                   className="buttons-with-number__value"/>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="buttons-with-number__button buttons-with-number__button--plus" name={NamesButton.PLUS}>+</button>
        </div>
    );
};

ButtonsWithNumber.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export {ButtonsWithNumber};
