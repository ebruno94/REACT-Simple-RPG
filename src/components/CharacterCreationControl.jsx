import React from 'react';
import PropTypes from 'prop-types';
import CharacterForm from './CharacterForm';

export default class CharacterCreationControl extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div>
        <CharacterForm />
      </div>
    );
  }
}

CharacterCreationControl.propTypes = {
  onNewCharacterCreation: PropTypes.func
}
