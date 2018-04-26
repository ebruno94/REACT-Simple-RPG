import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import CharacterCreationControl from './CharacterCreationControl';
import CharacterForm from './CharacterForm';
import CharacterSelect from './CharacterSelect';
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
          image: ''
        },
        [v4()] :{
          name: '---',
          charClass: '',
          image: ''
        },
        [v4()] :{
          name: '---',
          charClass: '',
          image: ''
        }
      },
      selectedCharacterSlot: null
    };
    this.handleNewCharacter = this.handleNewCharacter.bind(this);
    this.handleCharacterSelection = this.handleCharacterSelection.bind(this);
  }

  handleNewCharacter(newCharacter){
    console.log(newCharacter);
    let newMasterCharacterList = Object.assign({}, this.state.masterCharacterList);
    newMasterCharacterList[this.state.selectedCharacterSlot] = newCharacter;
    this.setState({masterCharacterList: newMasterCharacterList});
  }

  handleCharacterSelection(characterId){
    this.setState({selectedCharacterSlot: characterId});
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
            height: 575px;
            margin-left: auto;
            margin-right: auto;
          }

          h4, h5{
            margin: 0px;
          }

        `}</style>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/character-select' render={()=><CharacterSelect masterCharacterList={this.state.masterCharacterList} onCharacterSelection={this.handleCharacterSelection}/>}/>
          <Route path='/character-create' render={()=><CharacterForm onNewCharacterCreation={this.handleNewCharacter}/>}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
