import React from 'react';
import PropTypes from 'prop-types';

export default function ClassDescription(props){
  let classDescription = '';
  let className = '';
  let image = '';
  if (props.selectedClass === '---'){
    className = <span></span>
    classDescription = <p style={{fontWeight: 'bold'}}>Select A Class Above</p>
    image = <p>Character Image</p>
  } else if (props.selectedClass === 'Vanguard'){
    className =
    <div>
      <h1>VANGUARD</h1>
      <hr/>
    </div>
    classDescription =
    <p><strong>Vanguards are known for their strength and unwavering toughness. They can withstand enemy attacks with ease, and deal heavy blows with both shield and sword. They are deadly, but their strength comes with very slow movement, making them an easy target for faster opponents.</strong></p>;
    image = <img style={{height: '300px', width: '200px', border: '2px solid black', boxShadow: '0px 0px 25px black'}} src={props.imageValue}/>
  } else if (props.selectedClass === 'Skirmisher'){
    className =
      <div>
        <h1>SKIRMISHER</h1>
        <hr/>
      </div>
    classDescription =
    <p><strong>Skirmishers are not afraid to venture unto the darkest part of the land due to their quick-thinking, and their swift and deadly attacks. They are versatile in weaponry, but mainly use the short sword, dagger and bows for maximum mobility. They may be quick, but they are very squishy.</strong></p>
    image = <img style={{height: '300px', width: '200px', border: '2px solid black', boxShadow: '0px 0px 25px black'}} src={props.imageValue}/>
  } else if (props.selectedClass === 'Elementalist'){
    className =
    <div>
      <h1>ELEMENTALIST</h1>
      <hr/>
    </div>
    classDescription =
    <p><strong>Masters of the elements, Elementalists can conjure magic and use the natural elements to slay multiple foes at once. Most of them travel alone with their staves. They fight from a distance and cast magic to prevent enemies from closing in, but fall swiftly when approached.</strong></p>
    image = <img style={{height: '300px', width: '200px', border: '2px solid black', boxShadow: '0px 0px 25px black'}} src={props.imageValue}/>
  }
  return(
    <div>
      <style jsx>{`
          .classDescriptionContainer{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 10px;
          }

          .title{
            text-shadow: 0px 0px 15px black;
          }

      `}</style>
      <div className='classDescriptionContainer'>
        <div>
          <div className='title'>
            {className}
          </div>
          {classDescription}
        </div>
        <div>
          {image}
        </div>
      </div>
    </div>
  );
}

ClassDescription.propTypes = {
  selectedClass: PropTypes.string,
  imageValue: PropTypes.string
};
