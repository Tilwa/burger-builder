import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
    <div className={classes.Per}>
        <p onClick={props.click}>my name is {props.name} and i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}
export default person;