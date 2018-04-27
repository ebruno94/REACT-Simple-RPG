import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export default class CharacterList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedCharacterSlot: null
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event){
    this.setState({selectedCharacterSlot: event.target.value});
    this.props.onCurrentCharacterSelect(event.target.value);
  }

  render(){
    return(
      <div>
        <div className='charContainer'>
          {Object.keys(this.props.characterList).map(characterId =>
            <label>
              <input type='radio' value={characterId} onChange={this.handleOptionChange}
                checked={this.state.selectedCharacterSlot === characterId}/>
              <div>
                <Character
                  onCharacterSelection={this.props.onCharacterSelection}
                  onCharacterDeletion={this.props.onCharacterDeletion}
                  image={this.props.characterList[characterId].image} name={this.props.characterList[characterId].name} charClass={this.props.characterList[characterId].charClass} characterId={characterId} key={characterId} />
              </div>
            </label>
          )}
        </div>
        <style jsx>{`
            .charContainer{
              padding-top: 50px;
              padding-bottom: 50px;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-column-gap: 10px;
              height: 300px;
              justify-items: center;
            }

            label > input {
              visibility: hidden;
              position: absolute;
            }

            label > input:checked + div{
              border: 3px solid crimson;
              box-shadow: 0px 0px 20px darkred;
              border-radius: 25px;
            }
            `}</style>
        </div>
      );
  }
}

CharacterList.propTypes = {
  characterList: PropTypes.object,
  onCharacterSelection: PropTypes.func,
  onCharacterDeletion: PropTypes.func
};
