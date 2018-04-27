import React from 'react';
import {Link} from 'react-router-dom';

export default function ButtonContainer(props){
  let display = '';
  let route = props.currentRouterPath;
  if (route === '/character-select'){
    display =
    <div>
      <Link style={{textDecoration: 'none', color: 'white', float: 'left'}} to='/'><button>HOME</button></Link>
      <Link style={{textDecoration: 'none', color: 'white', float: 'right'}} to='/play'><button>START GAME</button></Link>
    </div>
  } else if (route === '/character-create'){
    display =
    <div>
      <Link style={{textDecoration: 'none', color: 'white', float: 'left'}} to='/character-select'><button>RETURN</button></Link>
      <button style={{float: 'right'}} type='submit'>CREATE</button>
    </div>
  } else if (route === '/play'){
    display =
    <div>
      <Link style={{textDecoration: 'none', color: 'white', float: 'left'}} to='/character-select'><button>RETURN</button></Link>
      <button style={{float: 'right'}}>FIGHT</button>
    </div>
  }
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
      <div className='buttonContainer'>
        {display}
      </div>
    </div>
  );
}
