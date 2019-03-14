import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Input extends React.Component {

  render() {
    const { name, value, onChange, disabled, tabIndex, placeholder, className, id } = this.props;
    return (
      <div className="form-group">
        <label aria-label={placeholder} htmlFor={id}>
         </label>
        <input id={id} tabIndex={tabIndex} disabled={disabled} className={cx('form-control', className)} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className:PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
