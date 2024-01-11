export default function CalculatorButtons() {


    return (
        <div className="calculator__buttons">
            <CalculatorOnOff></CalculatorOnOff>
            <div className="calculator__main-buttons">
                {/* First row of the calculator buttons*/}
                <CalculatorOperator Content="AC" Click={() => alert('clicked')}></CalculatorOperator>
                <CalculatorOperator Content="&#8730;"></CalculatorOperator>
                <CalculatorOperator Content="&#8319;"></CalculatorOperator>
                <CalculatorOperator Content="&#247;"></CalculatorOperator>
                {/* Second row of the calculator buttons*/}
                <CalculatorNumber Content="7"></CalculatorNumber>
                <CalculatorNumber Content="8"></CalculatorNumber>
                <CalculatorNumber Content="9"></CalculatorNumber>
                <CalculatorOperator Content="&#215;"></CalculatorOperator>
                {/* Third row of the calculator buttons*/}
                <CalculatorNumber Content="4"></CalculatorNumber>
                <CalculatorNumber Content="5"></CalculatorNumber>
                <CalculatorNumber Content="6"></CalculatorNumber>
                <CalculatorOperator Content="&#8722;"></CalculatorOperator>
                {/* Fourth row of the calculator buttons*/}
                <CalculatorNumber Content="1"></CalculatorNumber>
                <CalculatorNumber Content="2"></CalculatorNumber>
                <CalculatorNumber Content="3"></CalculatorNumber>
                <CalculatorOperator Content="&#43;"></CalculatorOperator>
                {/* Fifth row of the calculator buttons*/}
                <CalculatorNumber Content="0"></CalculatorNumber>
                <CalculatorOperator Content="."></CalculatorOperator>
                <CalculatorOperator Content="DEL"></CalculatorOperator>
                <CalculatorOperator Content="&#61;"></CalculatorOperator>
            </div>
        </div>
    )
}

function CalculatorOnOff() {


    return (
        <div className="calculator__onoff">
            <button>ON/ OFF</button>
        </div>
    )
}

function CalculatorOperator({ Content, Click }) {


    return (
        <button onClick={Click}>{Content}</button>
    )
}

function CalculatorNumber({ Content }) {

    return (
        <button>{Content}</button>
    )
}