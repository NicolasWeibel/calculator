import './App.css';
import Button from './components/Button';
import CalculatorScreen from './components/CalculatorScreen';
import ClearButton from './components/ClearButton';
import calculatorLogo from './images/logo.png'
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input).toString())
    } else {
      alert('Enter a value to perform the operation')
    }
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img
          src={calculatorLogo}
          className='calculator-logo'
          alt='Logo' />
      </div>
      <div className='calculator-container'>
        <CalculatorScreen input={input} />
        <Button handleClick={addInput} >1</Button>
        <Button handleClick={addInput} >2</Button>
        <Button handleClick={addInput} >3</Button>
        <Button handleClick={addInput} >+</Button>
        <Button handleClick={addInput} >4</Button>
        <Button handleClick={addInput} >5</Button>
        <Button handleClick={addInput} >6</Button>
        <Button handleClick={addInput} >-</Button>
        <Button handleClick={addInput} >7</Button>
        <Button handleClick={addInput} >8</Button>
        <Button handleClick={addInput} >9</Button>
        <Button handleClick={addInput} >*</Button>
        <Button handleClick={calculateResult} >=</Button>
        <Button handleClick={addInput} >0</Button>
        <Button handleClick={addInput} >.</Button>
        <Button handleClick={addInput} >/</Button>
        <ClearButton handleClick={() => setInput('')} />
      </div>
    </div>
  );
}

export default App;
