// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

export const FormButton = (props) => {
    // notice we don't pass a click handler to this component. It's supposed to be used as a FormButton only.
    // You'd want to use an onSubmit on the Form Element itself to keep your forms organized.
    return (
        <button disabled={props.disabled} className={props.classType || 'primary'}>
            {props.buttonText}
        </button>
    );
};

FormButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    classType: PropTypes.string,
    disabled: PropTypes.bool,
};