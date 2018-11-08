import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * @name Button
 * @description Button Component description
 */

const Button = ({ text, type, small, effect, outline, disabled, onClick, id }) => {

  const btnClass = classNames('btn', {
    [`lnt-btn-${type}`]: true,
    'btn-small': small,
    'btn-flat': outline,
    'waves-effect': effect,
    'waves-light': effect && !outline,
    'disabled': disabled,
  });

  const attrs = (disabled) ? { disabled } : {};

  return (
    <button
      className={btnClass}
      onClick={onClick}
      id={id}
      {...attrs}
    >
      {text}
    </button>
  );

};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
Button.propTypes = {
  /** label text of button */
  text: PropTypes.string,
  /** color of button */
  type: PropTypes.oneOf(['primary', 'default', 'error', 'linte']),
  /** small button */
  small: PropTypes.bool,
  /** click ripple animation of button - see [materialize](https://materializecss.com/waves.html) */
  effect: PropTypes.bool,
  /** reference to inverse primary colors of button */
  outline: PropTypes.bool,
  /** reference to set disabled of button */
  disabled: PropTypes.bool,
  /** callback of button click */
  onClick: PropTypes.func,
  /** id attr of button */
  id: PropTypes.string
}

Button.defaultProps = {
  text: 'Button',
  type: 'primary',
  small: false,
  effect: false,
  outline: false,
  disabled: false,
  onClick: null,
  id: null
}

export default Button;