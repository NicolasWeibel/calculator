import React from 'react';
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => {
  return (
    <div className='clear-button' onClick={props.handleClick}>
      Clear
    </div>
  )
}

export default ClearButton