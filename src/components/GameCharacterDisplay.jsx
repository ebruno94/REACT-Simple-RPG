import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './ButtonContainer';

export default function GameCharacterDisplay(props){
  return(
    <div>
      <div className='container'>
        <h1>{props.character.name}</h1>
        <h3>{props.character.charClass}</h3>
        <hr/>
        <h4>Current Status</h4>
        <progress value={props.character.hp} max={props.character.maxHp}> </progress>
        <h4>HP: {props.character.hp}/{props.character.maxHp}</h4>
        <progress value={props.character.mp} max={props.character.maxMp}> </progress>
        <h4>MP: {props.character.mp}/{props.character.maxMp}</h4>
        <progress value={props.character.exp} max={props.character.maxExp}> </progress>
        <h4>EXP: {props.character.exp}/{props.character.maxExp}</h4>
        <ButtonContainer currentRouterPath={props.currentRouterPath}/>
      </div>
    </div>
  );
}

GameCharacterDisplay.propTypes = {
  character: PropTypes.object,
  currentRouterPath: PropTypes.string
};
