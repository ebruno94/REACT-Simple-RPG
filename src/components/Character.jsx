import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Character(props){
  let displayedComponent = '';
  if (props.name === '---'){
    displayedComponent = <div><Link style={{textDecoration: 'none', color: 'white'}} to='/character-create'><button style={{marginTop: '125px'}} onClick={()=>{props.onCharacterSelection(props.characterId);}}>CREATE</button></Link></div>
  } else {
    displayedComponent =
    <div>
      <div style={{backgroundColor: 'black', color: 'white', borderRadius: '20px', cursor: 'pointer'}}>
        <img style={{height: '250px', width: '175px', borderRadius: '20px'}} src={props.image}/>
        <h4>{props.name}</h4>
        <h5>{props.charClass}</h5>
      </div>
      <br/>
      <button onClick={()=>{props.onCharacterDeletion(props.characterId)}}>DELETE</button>
    </div>
  }
  return(
    <div>
      <style jsx>{`
          .box{
            display: block;
            border: 1px solid black;
            box-shadow: 0px 0px 20px black;
            border-radius: 20px;
            height: 300px;
            width: 175px;
          }
          `}</style>
        <div className='box'>
          {displayedComponent}
        </div>
      </div>
    );
}

Character.propTypes = {
  name: PropTypes.string,
  charClass: PropTypes.string,
  characterId: PropTypes.string,
  onCharacterSelection: PropTypes.func,
  onCharacterDeletion: PropTypes.func
};
