import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import ClassDescription from './ClassDescription';
import ButtonContainer from './ButtonContainer';

export default class CharacterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectValue: '---',
      nameValue: '',
      imageValue: '',
      redirect: false
    }
    this.handleNewCharacterSubmission = this.handleNewCharacterSubmission.bind(this);
    this.handleClassSelect = this.handleClassSelect.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleNewCharacterSubmission(event){
    event.preventDefault();
    this.props.onNewCharacterCreation({name: this.state.nameValue, charClass: this.state.selectValue, image: this.state.imageValue});
    this.setState({redirect: true});
  }

  handleClassSelect(event){
    let e = event.target.value;
    this.setState({selectValue: e});
    if (e === 'Vanguard'){
      this.setState({imageValue: 'https://pre00.deviantart.net/176d/th/pre/f/2016/002/3/9/demonknight_by_rotaken-d9mi82y.png'});
    } else if (e === 'Skirmisher'){
      this.setState({imageValue: 'https://img00.deviantart.net/2230/i/2017/035/0/8/dailyknight_8_by_rotaken-daxuj42.png'});
    } else if (e === 'Elementalist'){

      this.setState({imageValue: 'https://pre00.deviantart.net/9e44/th/pre/f/2015/239/2/2/shroomlock_by_rotaken-d97dc0u.png'})
    } else if (e === '---'){
      this.setState({imageValue: ''})
    };
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
          {(this.state.redirect)
          ? <Redirect to='/character-select'/>
          : <span></span>}
          <h1>CREATE A CHARACTER</h1>
          <hr/>
          <form onSubmit={this.handleNewCharacterSubmission}>
            <label>Character Name </label>
            <input value={this.state.nameValue} onChange={this.handleNameInput}/>
            <br/>
            <label for='characterName'>Select A Class </label>
            <select onChange={this.handleClassSelect}>
              <option value='---'>---</option>
              <option value='Vanguard'>Vanguard</option>
              <option value='Skirmisher'>Skirmisher</option>
              <option value='Elementalist'>Elementalist</option>
            </select>
            <br/>
            <hr/>
            <ClassDescription selectedClass={this.state.selectValue} imageValue={this.state.imageValue}/>
            <hr/>
            <ButtonContainer currentRouterPath={this.props.currentRouterPath}/>
          </form>
        </div>
      </div>
    );
  }
}
