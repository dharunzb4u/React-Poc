import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentWillMount() {

        this.counter = 0;
        this.inputValue=null;
    }
showMsg=()=>
{
    this.inputValue=this.refs.inputvalue.value;
    this.counter=this.counter+1;
    alert("Hello "+this.inputValue+"!!! you have clicked "+this.counter+" times")
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome to React...

        </p>
          <input type="text" placeholder={"Enter Your Name"}  name={"inptBox"} ref={"inputvalue"} />
          <button onClick={this.showMsg}>Submit</button>
      </div>
    );
  }
}

export default App;
