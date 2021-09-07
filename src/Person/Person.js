import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style2 = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
    <div className="Person" style={style2}>
        <p onClick={props.click}>my name is {props.name} and i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default Radium(person);