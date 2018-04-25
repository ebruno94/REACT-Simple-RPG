import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export default function CharacterList(props){
  return(
    <div>
      <style jsx>{`
          .charContainer{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 50px;
            grid-row-gap: 50px;
          }

          .box{
            display: block;
            border: 1px solid black;
            box-shadow: 0px 0px 20px black;
            border-radius: 20px;
            height: 200px;
            width: 150px;
          }

          .box:hover{
            box-shadow: 0px 0px 0px white;
            cursor: pointer;
          }
      `}</style>
      <hr/>
      <div className='charContainer'>
        {Object.keys(props.characterList).map(function(characterId){
          let character = props.characterList[characterId];
          <div className='box'>
              <Character
              image={character.image}
              name={character.name}
              charClass={character.charClass}
              key={characterId}
              characterId={characterId}/>;
          </div>
        })}
      </div>
    </div>
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.object
};
