import React from 'react';
import PropTypes from 'prop-types';

export default function Character(props){
  let characterDisplay;
  if (props.name === '---'){
      characterDisplay =
      <div>
        <button style={{marginTop: '75px', marginBottom:'25px'}}>CREATE</button>
      </div>
  } else {
    characterDisplay =
    <div className='characterBox'>
      <img style={{height: '250px', width: '175px', borderRadius: '20px'}} src={props.image}/>
      <div className='charInfo'>
        <h4>{props.name}</h4>
        <h5>{props.charClass}</h5>
      </div>
    </div>
  }
  return(
    <div>
      <style jsx>{`
        .characterBox{
          justify-content: center;
        }

        .charInfo{
          background-color: black;
          color: white;
        }

        .image{}
          height: 175px;
          width: 150px;
        }
      `}</style>
      {characterDisplay}
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string,
  charClass: PropTypes.string,
  characterId: PropTypes.string
};
