import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './Char/Char';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  
  state = {
    persons: [
      { id: '123', name: 'Max', age: 28 },
      { id: '456', name: 'Manu', age: 29 },
      { id: '789', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value', 
    showPersons: false,
    userInput: ' '
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }




  changeListner = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render () {

    const style1 = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style1.backgroundColor = 'red';
      style1[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }



    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch}
      key={index}
      clicked={() => this.deleteCharHandler(index)} />
    });

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) { 
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">

          <p className={classes.join(' ')}>Hi, I'm a React App</p>
          <button 
            style={style1}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {persons}    


          <hr/>
          <input type='text' 
          onChange={this.changeListner}
          value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
