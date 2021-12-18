import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KGSi } from './KGSi';
import { state } from "./state";

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
