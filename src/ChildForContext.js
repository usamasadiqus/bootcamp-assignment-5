import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const ChildForContext = () => {

    let counterValue = useContext(CounterContext);

    return (
        <div>
            <h1>Counter Using Context</h1>
            <h3>Context value: {counterValue[0]}</h3>

            <button onClick={() => { counterValue[1](++counterValue[0]) }}>
                Increment Context
            </button>
        </div>
    )
}

export default ChildForContext;