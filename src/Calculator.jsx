import Screen from "./Screen.jsx";
import Buttons from "./Buttons.jsx";
import reducer from "./Reducer.jsx";
import { useState, useReducer } from "react";

export default function Calculator() {

    const [on, setOn] = useState(false);
    const [input, dispatch] = useReducer(reducer, {main: "0", previous: "", math: "0"})

    return (
        <div className="calculator">
            <Screen on={on} input={input} dispatch={dispatch}/>
            <Buttons on={on} setOn={setOn} dispatch={dispatch} input={input}/>
        </div>
    )
}