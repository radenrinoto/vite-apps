import React from 'react'
import classes from './style.module.scss';

const Button = ({ text, onClick, variant = 'sm' }) => {
  let buttonStyle = '';
  switch (variant) {
    case 'sm':
      buttonStyle = classes.sm
      break;
    case 'md':
      buttonStyle = classes.md
      break;
    case 'lg':
      buttonStyle = classes.lg
      break;
    default:
      break;
  }

  return (
    <div onClick={onClick} className={`${classes.container} ${buttonStyle}`}>
      {text || 'Submit'}
    </div>
  )
}

export default Button