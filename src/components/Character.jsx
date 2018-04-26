import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Character(props){
  if (props.name === '---'){
    return(
      <div>
        <Link style={{textDecoration: 'none', color: 'white'}} to='/character-create'><button style={{marginTop: '125px'}} onClick={()=>{props.onCharacterSelection(props.characterId);}}>CREATE</button></Link>
      </div>
    );
  } else {
    return(
      <div>
        <style jsx>{`
          .characterBox{
            justify-content: center;
            background-color: black;
            color: white;
            font-family: cursive;
            border-radius: 20px;
          }

          img{
            height: 250px;
            width: 175px;
            border-radius: 20px;
          }
        `}</style>
        <div className='characterBox'>
          <img src={props.image}/>
          <h4>{props.name}</h4>
          <h5>{props.charClass}</h5>
        </div>
      </div>
    );
  }
}

Character.propTypes = {
  name: PropTypes.string,
  charClass: PropTypes.string,
  characterId: PropTypes.string
};
