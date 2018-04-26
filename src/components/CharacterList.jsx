import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export default function CharacterList(props){
  return(
    <div>
      <div className='charContainer'>
        {Object.keys(props.characterList).map(characterId =>
          <div className='box'>
            <Character name={props.characterList[characterId].name} charClass={props.characterList[characterId].charClass} key={characterId} characterId={characterId} />
          </div>
        )}
      </div>
      <style jsx>{`
        .box{
          display: block;
          border: 1px solid black;
          box-shadow: 0px 0px 20px black;
          border-radius: 20px;
          height: 200px;
          width: 150px;
        }

        .charContainer{
          padding-top: 50px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 50px;
          height: 300px;
          justify-items: center;
        }
      `}</style>
    </div>
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.object
};
