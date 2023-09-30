import React from 'react';
import '../stylesheets/Button.css'

function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  }

  return (
    <div className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trim()}>
      {props.children}
    </div>
  )
}

export default Button;