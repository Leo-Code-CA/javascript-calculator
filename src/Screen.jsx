export default function Screen({ on, input }) {


    return (
        <div className="calculator__screen">
            <small>10</small>
            <p>
                {on && input.split(/\*\*|~~/).map((elem, i) => i % 2 === 0 ? <span>{elem}</span> : <sup>{elem}</sup>)}
            </p>
        </div>
    )
}