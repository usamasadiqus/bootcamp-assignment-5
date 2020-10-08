import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const ChildForReducer = () => {
    const reducerValue = useReducer(CounterReducer, 1);

    return (
        <div className="reducer">
            <h1>Counter Using Reducer</h1>
            <h3>Context value: {reducerValue[0]}</h3>

            <button onClick={() => reducerValue[1]('INCREMENT')}>
                Increment Reducer
            </button>
        </div>
    )
}

export default ChildForReducer;