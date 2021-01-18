import React from 'react';
//Style
import './error.scss';

const Error = ({ message }) => {
    return (
        <div 
            className="error"
            aria-label={message}
        >
            <span>{message}</span>
        </div>
    );
};

export default Error;
