import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import './Button.less';

/**
 * @name Button
 * @description Button Component description
 */

const Button = (props) => {
  const btnClass = classNames('lnt-btn', {
    [`lnt-btn-${props.type}`]: true,
    'lnt-btn-outline': props.outline,
    '.disabled': props.disabled,
  });

  const attrs = {};
  if (props.disabled) {
    attrs.disabled = 'disabled';
  }
  return (
    <button
      className={btnClass}
      onClick={props.onClick}
      id={props.id}
      {...attrs}
    >
      {props.text}
    </button>
  );

};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
Button.propTypes = {
  /** label text of button */
  text: PropTypes.string,
  /** color of button - can be ['primary', 'default', 'error', 'linte'] */
  type: PropTypes.string,
  /** reference to inverse primary colors of button */
  outline: PropTypes.bool,
  /** reference to set disabled of button */
  disabled: PropTypes.bool,
  /** callback of button click */
  onClick: PropTypes.func,
  /** ID of button */
  id: PropTypes.string
}

Button.defaultProps = {
  text: 'Button',
  type: 'primary',
  outline: false,
  disabled: false,
  onClick: null,
  id: null
}

export default Button;