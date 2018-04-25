import React from 'react';
import PropTypes from 'prop-types';

export default function Character(props){
  return(
    <div>
      <img src={props.image}/>
      <h1> {props.name} </h1>
    </div>
  )
}
