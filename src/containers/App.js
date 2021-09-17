import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Validation from '../ValidationComponent/ValidationComponent';
import Char from '../Char/Char';
import Cockpit from '../components/Cockpit/Cockpit';




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

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }



    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch}
      key={index}
      clicked={() => this.deleteCharHandler(index)} />
    });

    

    return (
        <div className={classes.App}>
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
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
    );
  }
}

export default App;
