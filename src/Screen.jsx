export default function Screen({ on, input }) {

    function displayFormated(type) {

        let equal = false;

        return type
        .replaceAll(/sqrtend/g, "")
        .replaceAll(/(\.+)/g, ".")
        .replaceAll(/(\d+\.\d+)(\.(\d+))+/g, "$1$3")
        .split(/\*\*|powerend| /g)
        .map((elem, i) => elem === "=" ? equal = true && <span key={i}>{elem}</span>
        : equal ? <span key={i}>{elem}</span>
        : i % 2 === 0 ? <span key={i}>{elem}</span>
        : <sup key={i}>{elem}</sup>);

    }

    return (
        <div className={on ? "calculator__screen calculator__screen--on" : "calculator__screen calculator__screen--off"}>
            <small>{on && displayFormated(input.previous)}</small>
            <p id="display">{on && displayFormated(input.main)}</p>
        </div>
    )
}