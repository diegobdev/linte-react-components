import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * @name Button
 * @description Button description
 */

const Button = (props) => {

  const btnClass = classNames('lnt-btn', {
    // TODO: tratar primary para ficar genérico
    'lnt-btn-primary': props.primary,
    'lnt-btn-outline-primary': props.outline
  });

  return (
    <button className={btnClass} onClick={props.onClick} id={props.id}>
      {props.text}
    </button>
  );

};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
Button.propTypes = {
  /** this is label text of button */
  text: PropTypes.string,
  /** this set primary color of button */
  primary: PropTypes.bool,
  /** this is reference to inverse primary colors of button */
  outline: PropTypes.bool,
  /** this is callback of button click */
  onClick: PropTypes.func,
  /** this is ID of button */
  id: PropTypes.string
}

Button.defaultProps = {
  text: 'Linte Button',
  primary: true,
  outline: false,
  onClick: null,
  id: null
}

export default Button;