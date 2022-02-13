export function Tracker({ successes, failures, name }) {
    return (
        <article>
            <h1>{name}</h1>
            <div className="counter erfolg">
                <button onClick={() => successes[1](--successes[0])}>-</button>
                <div className="amount">{successes[0]}</div>
                <button onClick={() => successes[1](++successes[0])}>+</button>
            </div>
            <div className="counter fehler">
                <button onClick={() => failures[1](--failures[0])}>-</button>
                <div className="amount">{failures[0]}</div>
                <button onClick={() => failures[1](++failures[0])}>+</button>
            </div>
        </article>
    );
}
