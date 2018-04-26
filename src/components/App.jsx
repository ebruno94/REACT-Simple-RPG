import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
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
          name: 'Ernest',
          charClass: 'Skirmisher',
          image: 'https://img00.deviantart.net/2230/i/2017/035/0/8/dailyknight_8_by_rotaken-daxuj42.png'
        },
        [v4()] :{
          name: '---',
          charClass: '---',
          image: ''
        },
        [v4()] :{
          name: '---',
          charClass: '---',
          image: ''
        }
      }
    };
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
          }

          .container{
            border: 2px solid black;
            box-shadow: 0px 0px 25px white;
            text-align: center;
            padding: 20px;
            border-radius: 25px;
            background-color: white;
            width: 750px;
            margin-left: auto;
            margin-right: auto;
          }

        `}</style>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/character-select' render={()=><CharacterSelect masterCharacterList={this.state.masterCharacterList}/>}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
