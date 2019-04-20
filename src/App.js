import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 ID="Title"> Alcovy Mobile Home Community </h1>
        <h3 ID="Title"> What happens to this?</h3>
        <p ID="Text">This is normal text</p>

        <form>
        <h3 ID="Login">Username:
        <input ID="Login" Type="text" name="Username:"/>
        </h3>
        <input ID="Button" Type="submit" value="Submit"/>
        </form>
      </div>      
    );
  }
}

export default App;
