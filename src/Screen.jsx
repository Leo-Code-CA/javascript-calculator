export default function Screen({ on, input }) {

    function displayFormated(type) {

    let equal = false;

    return type
    .replaceAll(/sqrtend/g, "")
    .split(/\*\*|powerend| /g)
    .map((elem, i) => elem === "=" ? equal = true && <span key={i}> {elem} </span>
    : equal ? <span key={i}>{elem}</span>
    : i % 2 === 0 ? <span key={i}>{elem}</span>
    : <sup key={i}>{elem}</sup>)

    }


    return (
        <div className="calculator__screen">
            <small>{on ? displayFormated(input.previous) : null}</small>
            <p>{on ? displayFormated(input.main) : null}</p>
        </div>
    )
}