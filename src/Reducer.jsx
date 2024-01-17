export default function reducer(state, action) {

    console.log(state);

    function mathFormated(nextState) {

        return nextState
        .replaceAll(/(×|÷|−|\+)(−\d+)/g, "$1($2)")
        .replaceAll(/(×|÷|−|\+)(×|÷|−|\+)/g, "$2")
        .replaceAll("×", "*")
        .replaceAll("÷", "/")
        .replaceAll("−", "-")
        .replaceAll(/sqrtend|powerend/g, "")
        .replaceAll(/(\d)√/g, "$1*√")
        .replaceAll(/\)(\d)/g, ")*$1")
        .replaceAll("√", "Math.sqrt");
    }

    switch (action.type) {

        case "RESET":
            return {
                ...state,
                main: "0",  
                math: "0"
            };
        case "DELETE":
            const deleteLast = state.main === "0" || state.main.length === 1 ? "0" : state.main.slice(0, state.main.length - 1);
            return {
                ...state,
                main: deleteLast,
                math: mathFormated(deleteLast)
            }
        case "SQRT":
            const sqrt = state.main === "0" ? action.content + "()"
            : action.matches % 2 == "0" ? state.main + action.content + "()" 
            : state.main + "sqrtend";
            return {
                ...state,
                main: sqrt,
                math: mathFormated(sqrt)
            }
        case "POW":
            const pow = action.matches % 2 == "0" ? state.main + "**" : state.main + "powerend";
            return {
                ...state,
                main: pow,
                math: mathFormated(pow)
            }
        case "EQUAL":
            const math = Function("return " + state.math)()
            const equal = math.toString().slice(0, 8);
            return {
                main: equal,
                previous: `${state.main} = ${equal}`,
                math: equal
            }
        case "DISPLAY": 
            const display = state.main === "0" ? action.content
            : state.main[state.main.length - 1] === ")" ? state.main.slice(0, state.main.length - 1) + action.content + ")"
            : state.main + action.content;
            return {
                ...state,
                main: display,
                math: mathFormated(display)
            }
        default:
            throw new Error("action type not reconized");
    }
}