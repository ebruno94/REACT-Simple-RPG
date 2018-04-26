import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ClassDescription from './ClassDescription';

export default class CharacterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectValue: 'Vanguard',
      nameValue: '',
      imageValue: ''
    }
    this.handleNewCharacterSubmission = this.handleNewCharacterSubmission.bind(this);
    this.handleClassSelect = this.handleClassSelect.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleNewCharacterSubmission(event){
    event.preventDefault();
  }

  handleClassSelect(event){
    this.setState({selectValue: event.target.value});
  }

  handleNameInput(event){
    this.setState({nameValue: event.target.value});
  }

  render(){
    return(
      <div>
        <style jsx>{`
            .buttonContainer{
              padding-top: 25px;
              padding-bottom: 25px;
              padding-left: 50px;
              padding-right: 50px;
            }
        `}</style>
        <div className='container'>
          <h1>CREATE A CHARACTER</h1>
          <hr/>
          <form onSubmit={this.handleNewCharacterSubmission}>
            <label>Character Name</label>
            <input value={this.state.nameValue} onChange={this.handleNameInput}/>
            <br/>
            <label for='characterName'>Select A Class</label>
            <select onChange={this.handleClassSelect}>
              <option value='vanguard'>Vanguard</option>
              <option value='skirmisher'>Skirmisher</option>
              <option value='elementalist'>Elementalist</option>
            </select>
            <br/>
            <hr/>
            <ClassDescription selectedClass={this.state.selectValue}/>
            <hr/>
            <div className='buttonContainer'>
              <Link style={{textDecoration: 'none', color: 'white', float: 'left'}} to='/character-select'><button>BACK</button></Link>
              <Link style={{textDecoration: 'none', color: 'white', float: 'right'}} to='/character-select'><button type='submit'>CREATE</button></Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
