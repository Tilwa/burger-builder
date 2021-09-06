import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '1px solid red'
    };
    return <input type='text' 
    onChange={props.changed} 
    value={props.name}
    style={inputStyle} />
};

export default userInput;