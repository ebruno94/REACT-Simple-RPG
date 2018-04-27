import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import CharacterCreationControl from './CharacterCreationControl';
import CharacterForm from './CharacterForm';
import CharacterSelect from './CharacterSelect';
import GameCharacterDisplay from './GameCharacterDisplay';
import Error404 from './Error404';
import Footer from './Footer';
import bg from '../assets/img/dungeon.png';
import {v4} from 'uuid';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      masterCharacterList:{
        [v4()] :{
          name: '---',
          charClass: '',
          image: '',
          hp: '0',
          maxHp: '100',
          mp: '0',
          maxMp: '100',
          attack: '0',
          defense: '0',
          magic: '0',
          exp: '0',
          maxExp: '100'
        },
        [v4()] :{
          name: '---',
          charClass: '',
          image: '',
          hp: '0',
          maxHp: '100',
          mp: '0',
          maxMp: '100',
          attack: '0',
          defense: '0',
          magic: '0',
          exp: '0',
          maxExp: '100'
        },
        [v4()] :{
          name: '---',
          charClass: '',
          image: '',
          hp: '0',
          maxHp: '100',
          mp: '0',
          maxMp: '100',
          attack: '0',
          defense: '0',
          magic: '0',
          exp: '0',
          maxExp: '100'
        }
      },
      selectedCharacterSlot: null,
      currentCharacter: null
    };
    this.handleNewCharacter = this.handleNewCharacter.bind(this);
    this.handleCharacterSelection = this.handleCharacterSelection.bind(this);
    this.handleCharacterDeletion = this.handleCharacterDeletion.bind(this);
    this.handleCurrentCharacter = this.handleCurrentCharacter.bind(this);
  }

  handleNewCharacter(newCharacter){
    let newMasterCharacterList = Object.assign({}, this.state.masterCharacterList);
    newMasterCharacterList[this.state.selectedCharacterSlot] = newCharacter;
    this.setState({masterCharacterList: newMasterCharacterList});
  }

  handleCharacterSelection(characterId){
    this.setState({selectedCharacterSlot: characterId});
  }

  handleCharacterDeletion(characterId){
    if (confirm('Do you wish to delete this character?')){
      let newMasterCharacterList = Object.assign({}, this.state.masterCharacterList);
      newMasterCharacterList[characterId] = {name: '---', charClass: '', image: ''};
      this.setState({masterCharacterList: newMasterCharacterList});
    }
  }

  handleCurrentCharacter(characterId){
    let newMasterCharacterList = Object.assign({}, this.state.masterCharacterList);
    this.setState({currentCharacter: newMasterCharacterList[characterId]});
  }

  render(){
    return(
      <div>
        <style jsx global>{`
          button{
            background-color: #0E0D12;
            color: white;
            cursor: pointer;
            border: 2px solid #0E0D12;
            box-shadow: 0px 0px 10px #0E0D12;
            font-family: cursive;
            font-weight: bold;
            text-shadow: 0px 0px 15px white;
            margin-left: auto;
            margin-right: auto;
            font-size: 18px;
            border-radius: 20px;
          }

          button:hover{
            background-color: white;
            color: #0E0D12;
            border: 2px solid #0E0D12;
            box-shadow: 0px 0px 10px #0E0D12 inset;
          }

          body{
            padding: 250px;
            padding-left: 400px;
            padding-right: 400px;
            background-image: url(${bg});
            background-repeat: no-repeat;
            background-size: cover;
            font-family: cursive;
            font-weight: bold;
          }

          .container{
            border: 2px solid black;
            box-shadow: 0px 0px 25px white;
            text-align: center;
            padding: 20px;
            border-radius: 25px;
            background-color: white;
            width: 750px;
            height: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          h4, h5{
            margin: 0px;
          }

        `}</style>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/character-select' render={(props)=><CharacterSelect masterCharacterList={this.state.masterCharacterList} onCharacterSelection={this.handleCharacterSelection} onCharacterDeletion={this.handleCharacterDeletion}
          onCurrentCharacterSelect={this.handleCurrentCharacter}
          currentRouterPath={props.location.pathname}/>}/>
          <Route path='/character-create' render={(props)=><CharacterForm onNewCharacterCreation={this.handleNewCharacter} currentRouterPath={props.location.pathname}/>}/>
          <Route path='/play' render={(props)=><GameCharacterDisplay character={this.state.currentCharacter} currentRouterPath={props.location.pathname}/>}/>
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
