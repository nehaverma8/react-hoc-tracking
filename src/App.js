import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonHOC from './Components/Button'
import _ from 'lodash';

const incrementStorage = (key) => {
  let c = sessionStorage.getItem(key)
      if(c){
         c = Number(c);
         c++;
         sessionStorage.setItem(key, c) 
      }
      else{
        sessionStorage.setItem(key,1)
      }
}
class App extends Component {
  constructor(){
    super();
    this.renderRaw = this.renderRaw.bind(this)
    this.renderDebounce = this.renderDebounce.bind(this)
    this.renderThrottle = this.renderThrottle.bind(this)
    this.renderDebounce = _.debounce(this.renderDebounce, 500);
    this.renderThrottle = _.throttle(this.renderThrottle, 500);
  }
  renderRaw(){
    incrementStorage('raw')    
  }

  renderThrottle(){
    incrementStorage('throttle')  
  }
  renderDebounce(){
    incrementStorage('debounce')  
  }
  render() {
    let buttons =[]
    for(let i =0; i<10000;i++){
      buttons.push(<ButtonHOC onRender={this.renderRaw} onThrottle={this.renderThrottle} onDebounce={this.renderDebounce} label={i}></ButtonHOC>)
    }
    return (
      <div className="App"> 
          {buttons}
      </div>
    );
  }
}

export default App;
