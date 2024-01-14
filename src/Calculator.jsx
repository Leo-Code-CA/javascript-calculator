import Screen from "./Screen.jsx";
import Buttons from "./Buttons.jsx";
import { useState } from "react";

export default function Calculator() {

    const [on, setOn] = useState(false);
    const [input, setInput] = useState("0");
    const [power, setPower] = useState(false);

    return (
        <div className="calculator">
            <Screen on={on} input={input} setInput={setInput} power={power}/>
            <Buttons on={on} setOn={setOn} setInput={setInput} input={input} power={power} setPower={setPower}/>
        </div>
    )
}