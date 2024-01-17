export default function Buttons({ on, setOn, dispatch, input }) {

    return (
        <div className="calculator__buttons">

            <div className="calculator__onoff">
                <button onClick={() => {setOn(!on); dispatch({type: "RESET"});}}>{on ? "OFF" : "ON"}</button>
            </div>

            <div className="calculator__main-buttons">
                
                {/* First row of the calculator buttons*/}
                <button 
                    onClick={() => on && dispatch({type: "RESET"})}>AC
                </button>
                <button 
                    onClick={(e) => dispatch({
                        type: "SQRT",
                        matches: [...input.main.matchAll(/√|sqrtend/g)].length,
                        content: e.target.textContent})}>&#8730;
                </button>
                <button 
                    onClick={() => dispatch({type: "POW", matches: [...input.main.matchAll(/\*\*|powerend/g)].length})}>x
                    <sup>y</sup>
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>&#247;</button>
               
               
               {/* Second row of the calculator buttons*/}
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>7
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>8
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>9
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>&#215;
                </button>
                
                {/* Third row of the calculator buttons*/}
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>4
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>5
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>6
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>&#8722;
                </button>
                
                {/* Fourth row of the calculator buttons*/}
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>1
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>2
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>3
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>&#43;
                </button>
                
                {/* Fifth row of the calculator buttons*/}
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>0
                </button>
                <button 
                    onClick={(e) => on && dispatch({type: "DISPLAY", content: e.target.textContent})}>.
                </button>
                <button 
                    onClick={() => on && dispatch({type: "DELETE"})}>DEL
                </button>
                <button 
                    onClick={() => dispatch({type: "EQUAL"})}>&#61;
                </button>

            </div>

        </div>
    )
}


