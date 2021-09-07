import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const person = (props) => {

    const StyledDiv = styled.div`

        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px) {
            width: '450px'
        }
    
    `;

    const style2 = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
    <StyledDiv>
        <div className="Person" style={style2}>
            <p onClick={props.click}>my name is {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    </StyledDiv>
    );
}

export default person;