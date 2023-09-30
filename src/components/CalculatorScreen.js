import React from 'react';
import '../stylesheets/CalculatorScreen.css'

const CalculatorScreen = ({ input }) => {
  return (
    <div className='input'>
      {input}
    </div>
  )
}

export default CalculatorScreen