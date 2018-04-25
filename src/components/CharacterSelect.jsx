import React from 'react';
import {Link} from 'react-router-dom';
import CharacterList from './CharacterList';

export default function CharacterSelect(props){
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
        <h1>SELECT A CHARACTER</h1>
        <hr/>
        <CharacterList characterList={props.characterList}/>
        <div className='buttonContainer'>
          <Link style={{textDecoration: 'none', color: 'white', float: 'left'}} to='/'><button>HOME</button></Link>
          <Link style={{textDecoration: 'none', color: 'white', float: 'right'}} to='/play'><button>START GAME</button></Link>
        </div>
      </div>
    </div>
  )
}
