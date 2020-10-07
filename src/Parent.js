import React from 'react';
import ChildForContext from './ChildForContext';
import ChildForReducer from './ChildForReducer';
import './App.css';

const Parent = () => {
    return (
        <div className="component">
            <ChildForContext />
            <ChildForReducer />
        </div>
    )
}

export default Parent;