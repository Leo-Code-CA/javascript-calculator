export default function reducer(state, action) {

    function mathFormated(nextState) {

        return nextState
        // remove all the operators at the very end of a calculation (if there is nothing after)
        .replaceAll(/(×|÷|−|\+|\*\*)$/g, "")
        // add parenthesis around the numbers starting with minus which have another operator before them
        .replaceAll(/(×|÷|−|\+)(−\d+)/g, "$1($2)")
        // if there are two operators right beside each other, just keep the last one
        .replaceAll(/(×|÷|−|\+)(×|÷|−|\+)/g, "$2")
        // allow only one dot per number, remove the other ones
        .replaceAll(/(\d+\.\d+)(\.(\d+))+/g, "$1$3")
        // replace the multiplication symbol with the one understood by JS
        .replaceAll("×", "*")
        // replace the division symbol with the one understood by JS
        .replaceAll("÷", "/")
        // replace the minus symbol with the one understood by JS
        .replaceAll("−", "-")
        // remove all the words needed only for the visual formating
        .replaceAll(/sqrtend|powerend/g, "")
        // if there is nothing between a number and a sqrt, assume it's a multiplication
        .replaceAll(/(\d)√/g, "$1*√")
        // if there is nothing between a parenthesis and a number, assume it's a multiplication
        .replaceAll(/\)(\d)/g, ")*$1")
        // replace the sqrt symbol with the one understood by JS
        .replaceAll("√", "Math.sqrt");
    }

    switch (action.type) {

        case "RESET":
            return {
                main: "0",
                previous: "",
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