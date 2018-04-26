import React from 'react';
import PropTypes from 'prop-types';

export default function Character(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.charClass}</h1>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string,
  charClass: PropTypes.string,
  characterId: PropTypes.string
};
