import React from 'react';
import {Link} from 'react-router-dom';
import CharacterList from './CharacterList';
import ButtonContainer from './ButtonContainer';
import PropTypes from 'prop-types';

export default function CharacterSelect(props){
  return(
    <div>
      <div className='container'>
        <h1>SELECT A CHARACTER</h1>
        <hr/>
        <CharacterList characterList={props.masterCharacterList} onCharacterSelection={props.onCharacterSelection} onCharacterDeletion={props.onCharacterDeletion} onCurrentCharacterSelect={props.onCurrentCharacterSelect}/>
        <br/>
        <hr/>
        <ButtonContainer currentRouterPath={props.currentRouterPath}/>
      </div>
    </div>
  );
}

CharacterSelect.propTypes = {
  masterCharacterList: PropTypes.object,
  onCurrenctCharacterSelect: PropTypes.func
};
