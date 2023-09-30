import './App.css';
import Button from './components/Button';
import CalculatorScreen from './components/CalculatorScreen';
import ClearButton from './components/ClearButton';
import calculatorLogo from './images/logo.png'

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img
          src={calculatorLogo}
          className='calculator-logo'
          alt='Logo' />
      </div>
      <div className='calculator-container'>
        <CalculatorScreen />
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
        <Button>=</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>/</Button>
        <ClearButton />
      </div>
    </div>
  );
}

export default App;
