import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import Footer from './Footer';
import bg from '../assets/img/dungeon.png';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      masterCharacterList:{}
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
          }

        `}</style>
        <Switch>
          <Route exact path='/' component={Welcome}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
