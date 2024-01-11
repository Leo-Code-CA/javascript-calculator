import CalculatorScreen from "./CalculatorScreen.jsx";
import CalculatorButtons from "./CalculatorButtons.jsx";
import './index.css';

export default function App() {
  
  return (
    <div className="main">
      <div className="calculator">
        <CalculatorScreen></CalculatorScreen>
        <CalculatorButtons></CalculatorButtons>
      </div>
    </div>
  )
}
