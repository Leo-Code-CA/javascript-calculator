export default function Screen({ on, input }) {


    return (
        <div className="calculator__screen">
            <small>{on && input.split(/\*\*|powerend/).map((elem, i) => i % 2 === 0 ? <span>{elem}</span> : <sup>{elem}</sup>)}</small>
            <p>
                {on && input.split(/\*\*|powerend/).map((elem, i) => i % 2 === 0 ? <span>{elem}</span> : <sup>{elem}</sup>)}
            </p>
        </div>
    )
}