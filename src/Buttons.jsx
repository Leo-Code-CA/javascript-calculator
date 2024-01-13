export default function Buttons({ on, setOn, setInput, input }) {

    function handleOnOff() {
        setOn(!on);
        setInput("0");
    }

    function handleClear() {
        setInput("0");
    }

    function handleDelete() {
        setInput((prev) => prev === "0" || prev.length === 1 ? "0" : prev.slice(0, prev.length - 1));
    }

    function handleDisplay(e) {
        setInput((prev) => prev === "0" ? e.target.textContent
        : prev[prev.length - 1] === ")" ? prev.slice(0, prev.length - 1) + e.target.textContent + ")"
        : prev + e.target.textContent);
    }

    function handleDisplaySqrt(e) {
        setInput((prev) => prev === "0" ? e.target.textContent + "()" : prev + e.target.textContent + "()");
        // try to make it so clicking a second time gets you out of the ().
    }

    function handleDisplayPow(e) {
        setInput((prev) => prev + " ");
    }

    function handleResult() {
        let result = "";

        for (let i = 0; i < input.length; i++) {

            switch (input[i]) {
                case "&#43;":
                result += "+";
                break;
                case "&#8722;":
                result += "-";
                break;
                case "&#215;":
                result += "*";
                break;
                case "&#247;":
            }
        }
    }


    return (
        <div className="calculator__buttons">
            <div className="calculator__onoff">
                <button onClick={handleOnOff}>{on ? "OFF" : "ON"}</button>
            </div>
            <div className="calculator__main-buttons">
                {/* First row of the calculator buttons*/}
                <button onClick={on && handleClear}>AC</button>
                <button operator="V" onClick={(e) => on && handleDisplaySqrt(e)}>&#8730;</button>
                <button operator="**" onClick={(e) => on && handleDisplayPow(e)}>x<sup>y</sup></button>
                <button operator="/" onClick={(e) => on && handleDisplay(e)}>&#247;</button>
                {/* Second row of the calculator buttons*/}
                <button onClick={(e) => on && handleDisplay(e)}>7</button>
                <button onClick={(e) => on && handleDisplay(e)}>8</button>
                <button onClick={(e) => on && handleDisplay(e)}>9</button>
                <button operator="*" onClick={(e) => on && handleDisplay(e)}>&#215;</button>
                {/* Third row of the calculator buttons*/}
                <button onClick={(e) => on && handleDisplay(e)}>4</button>
                <button onClick={(e) => on && handleDisplay(e)}>5</button>
                <button onClick={(e) => on && handleDisplay(e)}>6</button>
                <button operator="-" onClick={(e) => on && handleDisplay(e)}>&#8722;</button>
                {/* Fourth row of the calculator buttons*/}
                <button onClick={(e) => on && handleDisplay(e)}>1</button>
                <button onClick={(e) => on && handleDisplay(e)}>2</button>
                <button onClick={(e) => on && handleDisplay(e)}>3</button>
                <button operator="+" onClick={(e) => on && handleDisplay(e)}>&#43;</button>
                {/* Fifth row of the calculator buttons*/}
                <button onClick={(e) => on && handleDisplay(e)}>0</button>
                <button onClick={(e) => on && handleDisplay(e)}>.</button>
                <button onClick={handleDelete}>DEL</button>
                <button onClick={handleResult}>&#61;</button>
            </div>
        </div>
    )
}


