import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KGSi } from './KGSi';
import { state } from "./state";

async function AjaxExample(){
        let url = "https://filedn.eu/lo632ozzMr4FcIVneoYpzdm/yoyo.txt";
        let response = await fetch(url);
        if (response.ok || response.text() === undefined) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
            return response.text();
        } 
        else {
            alert("HTTP-Error: " + response.status);
        }
    }

function Example() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [State, setState]  = useState(new state());
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <header>Korean Grammar Syntax</header><br/>

        <input value = {State.Input} onChange={(e) => setState(KGSi.Interpolator(State.SetInput(e.target.value)))}></input><br/>
        <input value = {State.Output}></input>
        <br/><br/><br/><br/><br/>
        <textarea value={State.Console} rows={20} cols={200}></textarea>
      </div>
    );
  }

ReactDOM.render(
    <React.StrictMode>
        <Example />
    </React.StrictMode>,
  document.getElementById('root')
);
