import React from 'react';
import PropTypes from 'prop-types';

export default function ClassDescription(props){
  let classDescription = '';
  let className = '';
  if (props.selectedClass === 'vanguard'){
    className =
    <div>
      <h1>VANGUARD</h1>
    </div>;
    classDescription =
    <p><strong>Vanguards are known for their strength and unwavering toughness. They can withstand enemy attacks with ease, and deal heavy blows with both shield and sword. They are deadly, but their strength comes with very slow movement, making them an easy target for faster opponents.</strong></p>;
  } else if (props.selectedClass === 'skirmisher'){
    className =
      <div>
        <h1>SKIRMISHER</h1>
      </div>;
    classDescription =
    <p><strong>Skirmishers are not afraid to venture unto the darkest part of the land due to their quick-thinking, and their swift and deadly attacks. They are versatile in weaponry, but mainly use the short sword, dagger and bows for maximum mobility. They may be quick, but they are very squishy.</strong></p>
  } else {
    className =
    <div>
      <h1>ELEMENTALIST</h1>
    </div>;
    classDescription =
    <p><strong>Masters of the elements, Elementalists can conjure magic and use the natural elements to slay multiple foes at once. Most of them travel alone with their staves. They fight from a distance and cast magic to prevent enemies from closing in, but fall swiftly when approached.</strong></p>
  }
  return(
    <div>
      {className}
      <hr/>
      {classDescription}
    </div>
  );
}

ClassDescription.propTypes = {
  selectedClass: PropTypes.string
};
