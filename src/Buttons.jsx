import FCClogo from './assets/fcc_logo_text.svg';

export default function Buttons({ on, setOn, dispatch, input }) {

    return (
        <div className="calculator__buttons">

            <div className="calculator__onoff">
                <img src={FCClogo} alt="Free Code Camp Logo"></img>
                <button 
                    onClick={() => {setOn(!on); dispatch({type: "RESET"});}}>
                    {on ? "OFF" : "ON"}
                </button>
            </div>

            <div className="calculator__main-buttons">
                
                {/* First row of the calculator buttons*/}
                <button 
                    id="clear"
                    onClick={() => on && dispatch({type: "RESET"})}>
                    AC
                </button>
                <button
                    className={on ? ([...input.main.matchAll(/√|sqrtend/g)].length % 2 === 0 ? null : "mathOnGoing") : null}
                    onClick={(e) => dispatch({
                        type: "SQRT",
                        matches: [...input.main.matchAll(/√|sqrtend/g)].length,
                        content: e.target.textContent})}>
                        &#8730;
                </button>
                <button
                    className={on ? ([...input.main.matchAll(/\*\*|powerend/g)].length % 2 === 0 ? null : "mathOnGoing") : null}
                    onClick={() => dispatch({type: "POW", matches: [...input.main.matchAll(/\*\*|powerend/g)].length})}>
                    x<sup>y</sup>
                </button>
                <button 
                    id="divide"
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                        &#247;
                </button>
               
               {/* Second row of the calculator buttons*/}
                <button 
                    id='seven'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    7
                </button>
                <button 
                    id='eight'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    8
                </button>
                <button 
                id='nine'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    9
                </button>
                <button 
                    id="multiply"
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    &#215;
                </button>
                
                {/* Third row of the calculator buttons*/}
                <button 
                    id='four'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    4
                </button>
                <button 
                    id='five'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    5
                </button>
                <button 
                    id='six'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    6
                </button>
                <button 
                    id="subtract"
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    &#8722;
                </button>
                
                {/* Fourth row of the calculator buttons*/}
                <button 
                    id='one'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    1
                </button>
                <button 
                    id='two'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    2
                </button>
                <button 
                    id='three'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    3
                </button>
                <button 
                    id="add"
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    &#43;
                </button>
                
                {/* Fifth row of the calculator buttons*/}
                <button 
                    id='zero'
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    0
                </button>
                <button 
                    id="decimal"
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>
                    .
                </button>
                <button 
                    onClick={() => on && dispatch({type: "DELETE"})}>
                    DEL
                </button>
                <button
                    id="equals"
                    onClick={() => dispatch({type: "EQUAL"})}>
                    &#61;
                </button>

            </div>

        </div>
    )
}


