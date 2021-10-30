import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GetHelloResponse} from "@api-interfaces/GetHelloResponse";

function App() {
  fetch( '/api/v1').then((res) => res.json()).then((r : GetHelloResponse) => console.log(r.txt))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          User front
        </p>
      </header>
    </div>
  );
}

export default App;
