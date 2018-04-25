import React from 'react';
import {Link} from 'react-router-dom';

export default function Welcome(){
  return(
    <div>
      <div className='container'>
        <h1>Welcome to SimpleRPG!</h1>
        <Link style={{textDecoration: 'none', color: 'white'}} to='/character-select'><button>START</button></Link>
      </div>
    </div>
  );
}
