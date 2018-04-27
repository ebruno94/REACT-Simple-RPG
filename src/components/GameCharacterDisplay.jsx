import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './ButtonContainer';

export default function GameCharacterDisplay(props){
  return(
    <div>
      <div className='container'>
        <h1>Accessing properties of {props.character.name}</h1>
        <hr/>
        <ButtonContainer currentRouterPath={props.currentRouterPath}/>
      </div>
    </div>
  );
}

GameCharacterDisplay.propTypes = {
  character: PropTypes.object,
  currentRouterPath: PropTypes.string
};
